export interface ResumeType {
  id: string;
  label: string;
  filename: string;
}

class Resume {
  public static readonly FULLSTACK: ResumeType = {
    id: "fullstack",
    label: "Full Stack Developer",
    filename: "[FullStack] Đào Hữu Hoài - Resume.pdf",
  };
  public static readonly FRONTEND: ResumeType = {
    id: "frontend",
    label: "Frontend Developer",
    filename: "[Front-end] Đào Hữu Hoài - Resume.pdf",
  };
  public static readonly BACKEND: ResumeType = {
    id: "backend",
    label: "Backend Developer",
    filename: "[Back-end] Đào Hữu Hoài - resume.pdf",
  };
  public static readonly AI_DATA: ResumeType = {
    id: "ai-data",
    label: "AI / Data Engineer",
    filename: "[AI-Data Engineer] Đào Hữu Hoài - resume.pdf",
  };
  public static getAllResumes(): ResumeType[] {
    return [
      Resume.FULLSTACK,
      Resume.FRONTEND,
      Resume.BACKEND,
      Resume.AI_DATA,
    ];
  }
}

export default Resume;