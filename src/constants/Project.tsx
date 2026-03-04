export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageGradient: string; // Using gradients instead of static images for now
}

class Project {
  public static readonly data: ProjectItem[] = [
    {
      id: "1",
      title: "Ticket Booking System",
      description:
        "A professional event management system featuring a custom drawing tool for event maps and a secure public/private routing architecture. Improved performance by 50% through font optimization and lazy loading components.",
      techStack: [
        "React.js",
        "Java Spring Boot",
        "PostgreSQL",
        "Auth0",
        "Redux",
      ],
      githubUrl: "https://github.com/hwHoai/ticketbooking-fe",
      liveUrl: "Coming soon...",
      imageGradient: "from-blue-600 to-violet-600",
    },
    {
      id: "2",
      title: "Ginny - 3D AI Chatbot",
      description:
        "A real-time 3D AI character interaction platform. Integrated Twilio API for inbound call management and designed robust RESTful APIs with strict input validation for AI agent configurations.",
      techStack: [
        "Next.js",
        "Three.js",
        "TypeScript",
        "Prisma",
        "Twilio",
        "Jotai",
      ],
      githubUrl: "Private",
      liveUrl: "Coming soon...",
      imageGradient: "from-emerald-600 to-teal-600",
    },
    {
      id: "3",
      title: "EEG Signal Analysis Tool",
      description:
        "An automated desktop application for EEG signal processing and visualization. Implemented signal processing pipelines using SciPy/FFT to extract cognitive metrics, reducing preprocessing time by 40%.",
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "SciPy",
        "Tkinter",
        "Matplotlib",
      ],
      githubUrl: "Private",
      liveUrl: "Coming soon...",
      imageGradient: "from-orange-600 to-red-600",
    },
    {
      id: "4",
      title: "Fakebook Social Media",
      description:
        "A social networking platform featuring custom authentication with JWT and RSA key pairs. Implemented silent token renewal for seamless sessions and Firebase Storage for efficient media handling.",
      techStack: [
        "React.js",
        "Spring Boot",
        "MySQL",
        "Firebase",
        "JWT",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/hwHoai/fakebook",
      liveUrl: "Coming soon...",
      imageGradient: "from-pink-600 to-rose-600",
    },
    {
      id: "5",
      title: "Blockwork DApp",
      description:
        "A decentralized application (DApp) leveraging custom smart contracts deployed on the Sepolia testnet. Integrated Web3 wallet connections via MetaMask and WalletConnect to facilitate secure, blockchain-based user interactions.",
      techStack: [
        "Solidity",
        "Smart Contracts",
        "MetaMask",
        "WalletConnect",
        "Web3",
      ],
      githubUrl: "https://github.com/hwHoai/blockwork-contract",
      liveUrl: "Coming soon...",
      imageGradient: "from-indigo-600 to-cyan-600",
    },
    {
      id: "6",
      title: "Learning Resources",
      description:
        "A personal knowledge base where I document my continuous learning journey. It contains structured study materials, technical notes, and code snippets covering various domains from Machine Learning and Full-Stack development to Blockchain technologies.",
      techStack: [
        "Machine Learning",
        "Web Development",
        "Web3 Development",
        "Python",
        "Jupyter",
        "Markdown",
      ],
      githubUrl: "https://github.com/hwHoai/learning-resources",
      liveUrl: "N/A",
      imageGradient: "from-amber-600 to-orange-600",
    },
  ];
}

export default Project;
