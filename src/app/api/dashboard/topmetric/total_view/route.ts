import getAnalyticsClient from "@/config/ga4.config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const propertyId = process.env.PROPERTY_ID;

    if (!propertyId) {
      return NextResponse.json(
        { error: "PROPERTY_ID not found in environment variables" },
        { status: 500 },
      );
    }

    // Parse URL parameters
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get("days") || "30");

    const analyticsDataClient = getAnalyticsClient();

    // Run the report
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: `${days}daysAgo`,
          endDate: "today",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
      ],
    });

    // Calculate total views
    let totalViews = 0;
    const pageData: Array<{
      path: string;
      views: number;
    }> = [];

    if (response.rows) {
      for (const row of response.rows) {
        const pagePath = row.dimensionValues?.[0]?.value || "";
        const views = parseInt(row.metricValues?.[0]?.value || "0");

        totalViews += views;

        pageData.push({
          path: pagePath,
          views,
        });
      }
    }

    return NextResponse.json({
      isSuccess: true,
      data: {
        totalViews,
        period: `${days} days`,
      },
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch analytics data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
