import { Brain, Code2, Database, Layers } from "lucide-react";

class SkillGroup {
  public static readonly frontend = {
    icon: <Code2 className="w-4 h-4" />,
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Axios"],
  };
  public static readonly backend = {
    icon: <Layers className="w-4 h-4" />,
    label: "Backend",
    skills: ["Spring Boot", "Node.js", "Python", "REST API", "JWT"],
  };
  public static readonly devops = {
    icon: <Layers className="w-4 h-4" />,
    label: "DevOps",
    skills: ["Docker", "CI/CD"],
  };
  public static readonly data = {
    icon: <Database className="w-4 h-4" />,
    label: "Data & Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Pandas", "NumPy"],
  };
  public static readonly ai = {
    icon: <Brain className="w-4 h-4" />,
    label: "AI / ML",
    skills: ["Scikit-learn", "SciPy", "EEG signal processing", "OpenAI API"],
  };
  public static readonly BlockChain = {
    icon: <Layers className="w-4 h-4" />,
    label: "BlockChain",
    skills: ["Solidity", "Viem", "hardhat", "Siwe", "Wagmi", "Metamask"],
  }

  public static getAllGroups() {
    return [
      SkillGroup.frontend,
      SkillGroup.backend,
      SkillGroup.devops,
      SkillGroup.data,
      SkillGroup.ai,
      SkillGroup.BlockChain,
    ];
  }
}

export default SkillGroup;
