import { BetaAnalyticsDataClient } from "@google-analytics/data";

export default function getAnalyticsClient() {
  const credentials_string = process.env.GOOGLE_CREDENTIALS;
  if (!credentials_string) {
    throw new Error("GOOGLE_CREDENTIALS not found in environment variables");
  }

  let credentials;
  try {
    credentials = JSON.parse(credentials_string);
  } catch (e) {
    console.error("Error parsing GOOGLE_CREDENTIALS:", e);
    throw new Error("Failed to parse GOOGLE_CREDENTIALS");
  }

  return new BetaAnalyticsDataClient({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
  });
}