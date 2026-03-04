import { Briefcase, GraduationCap } from "lucide-react";
import { JSX } from "react";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
  icon: JSX.Element;
}

class Experience {
  public static readonly data: ExperienceItem[] = [
    {
      id: "1",
      role: "Data / AI Engineering Intern",
      company: "BrainLife",
      period: "11/2025 - 01/2026",
      description: [
        "Built a desktop application for EEG signal data analysis and visualization.",
        "Reduced data preprocessing and validation time by 40%.",
        "Engineered features for cognitive state analysis (Focus, Relaxation) and calculated Band Power.",
      ],
      type: "work",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: "2",
      role: "Freelance Fullstack Developer",
      company: '"Ginny" 3D AI Chatbot Project',
      period: "04/2025 - 08/2025",
      description: [
        "Built a 3D AI character capable of real-time interaction using Next.js and Three.js.",
        "Integrated Twilio API for phone numbers and inbound calls.",
        "Designed RESTful APIs with strict input validation for AI agent configurations.",
      ],
      type: "work",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: "3",
      role: "Bachelor of Computer Science",
      company: "Ho Chi Minh City International University",
      period: "2023 - Present",
      description: [
        "Developer at MIDIS Lab.",
        "Vice-Lead at GDG Campus IU (2024-2025).",
      ],
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];
}

export default Experience;
