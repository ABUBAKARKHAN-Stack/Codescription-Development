import { TechStackTabs } from "@/types/main.types";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiReactrouter,
    SiReactquery,
    SiThreedotjs,
    SiGreensock,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPrisma,
    SiDrizzle,
    SiPhp,
    SiLaravel,
    SiTailwindcss,
    SiFlutter,
    SiDart,
    SiRedux,
    SiDocker,
    SiGit,
    SiGithub
} from "react-icons/si";
import {
    TbBrandReactNative
} from "react-icons/tb";


export const techStackData = [
    {
        category: "Frontend (Web)",
        label: TechStackTabs.FRONTEND,
        techs: [
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React Router", icon: SiReactrouter },
            { name: "TanStack", icon: SiReactquery },
            { name: "Redux", icon: SiRedux },
            { name: "Three.js", icon: SiThreedotjs },
            { name: "GSAP", icon: SiGreensock },
            { name: "Framer Motion", icon: SiFramer }
        ]
    },
    {
        category: "Backend",
        label: TechStackTabs.BACKEND,
        techs: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "PHP", icon: SiPhp },
            { name: "Laravel", icon: SiLaravel },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Next.js (API)", icon: SiNextdotjs }
        ]
    },
    {
        category: "Databases",
        label: TechStackTabs.DATABASES,
        techs: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
            { name: "Drizzle", icon: SiDrizzle }
        ]
    },
    {
        category: "Mobile (Apps)",
        label: TechStackTabs.MOBILE,
        techs: [
            { name: "React Native", icon: TbBrandReactNative },
            { name: "Flutter", icon: SiFlutter },
            { name: "Dart", icon: SiDart }
        ]
    },
    {
        category: "DevOps & Tools",
        label: TechStackTabs.DEVOPSANDTOOLS,
        techs: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Docker", icon: SiDocker },
        ]
    }
];


const techStackSectionHeader = {
    mainHeading: "Our Technology Stack",
};

export {
    techStackSectionHeader
}