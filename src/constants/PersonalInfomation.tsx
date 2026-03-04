import { Linkedin, Github, Mail, MapPin, Globe } from "lucide-react";

class PersonalInformation {
    public static readonly location = {
    icon: <MapPin className="w-4 h-4 shrink-0" />,
    text: "Ho Chi Minh City, Vietnam",
    href: "https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam",
  };
  public static readonly email = {
    icon: <Mail className="w-4 h-4 shrink-0" />,
    text: "daohuuhoai2655@gmail.com",
    href: "mailto:daohuuhoai2655@gmail.com",
  };
    public static readonly github = {
    icon: <Github className="w-4 h-4 shrink-0" />,
    text: "github.com/hwHoai",
    href: "https://github.com/hwHoai",
    };
    public static readonly linkedin = {
    icon: <Linkedin className="w-4 h-4 shrink-0" />,
    text: "linkedin.com/in/dhhoai",
    href: "https://www.linkedin.com/in/dhhoai/",
    };
    public static readonly language = {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: "Vietnamese (Native) · English (Professional)",
    href: "",
  };

  public static getAllInfo() {
    return [
      PersonalInformation.location,
      PersonalInformation.email,
      PersonalInformation.github,
      PersonalInformation.linkedin,
      PersonalInformation.language,
    ];
  }
}

export default PersonalInformation;