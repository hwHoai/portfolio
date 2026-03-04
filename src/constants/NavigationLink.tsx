class NavigaitonLink {
    public static readonly HOME = { label: "Home", href: "#home" };
    public static readonly ABOUT = { label: "About", href: "#about" };
    public static readonly EXPERIENCE = { label: "Experience", href: "#experience" };
    public static readonly PROJECTS = { label: "Projects", href: "#projects" };
    public static readonly CONTACT = { label: "Contact", href: "#contact" };

    public static getAllLinks() {
        return [
            NavigaitonLink.HOME,
            NavigaitonLink.ABOUT,
            NavigaitonLink.EXPERIENCE,
            NavigaitonLink.PROJECTS,
            NavigaitonLink.CONTACT,
        ];
    }

}

export default NavigaitonLink;