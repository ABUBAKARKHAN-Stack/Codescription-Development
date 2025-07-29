import { Layers3, LayoutTemplate, Paintbrush, ServerCog, ShoppingCart, Smartphone } from "lucide-react";

const whatWeDoData = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Build fast, responsive, and SEO-friendly websites tailored to your brand and goals.",
        icon: LayoutTemplate,
        link: "/services/web-development",
    },
    {
        id: 2,
        title: "App Development",
        description:
            "Create high-performance mobile apps designed for seamless use on iOS and Android devices.",
        icon: Smartphone,
        link: "/services/app-development",
    },
    {
        id: 3,
        title: "Full Stack Development",
        description:
            "Deliver complete applications with robust backends and intuitive frontend experiences.",
        icon: Layers3,
        link: "/services/full-stack-development",
    },
    {
        id: 4,
        title: "E-Commerce Solutions",
        description:
            "Develop secure, scalable online stores with smooth checkout and payment integration.",
        icon: ShoppingCart,
        link: "/services/e-commerce",
    },
    {
        id: 5,
        title: "UI/UX Design",
        description:
            "Design visually engaging and user-friendly interfaces that boost interaction and retention.",
        icon: Paintbrush,
        link: "/services/ui-ux-design",
    },
    {
        id: 6,
        title: "DevOps & Automation",
        description:
            "Automate deployment and monitoring with CI/CD pipelines and modern cloud infrastructure.",
        icon: ServerCog,
        link: "/services/devops-automation",
    },
];
const whatWeDoSectionHeader = {
    mainHeading: "Areas of Expertise",
    subText: "We offer end-to-end services to help you grow fast and scale smarter."

}

export {
    whatWeDoData,
    whatWeDoSectionHeader
}