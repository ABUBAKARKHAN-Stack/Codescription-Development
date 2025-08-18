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
  SiGithub,
  SiKubernetes,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdOutlineArchitecture } from "react-icons/md";

export const techStackData = [
  {
    category: "Frontend (Web)",
    label: TechStackTabs.FRONTEND,
    subText:
      "The launchpad of the web — crafting stellar user interfaces and interactive experiences.",
    techs: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Router", icon: SiReactrouter },
      { name: "Redux", icon: SiRedux },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "GSAP", icon: SiGreensock },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Backend",
    label: TechStackTabs.BACKEND,
    subText:
      "The command center — powering galaxies of APIs, logic, and data flow behind the scenes.",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Next.js (API)", icon: SiNextdotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Microservices", icon: MdOutlineArchitecture },
    ],
  },
  {
    category: "Databases & ORMs",
    label: TechStackTabs.DATABASES,
    subText:
      "The data constellations — storing knowledge across galaxies and mapping it with ORMs.",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
    ],
  },
  {
    category: "Mobile Development",
    label: TechStackTabs.MOBILE,
    subText:
      "Exploring new worlds — crafting cross-platform apps for devices orbiting everywhere.",
    techs: [
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    category: "DevOps & Tools",
    label: TechStackTabs.DEVOPSANDTOOLS,
    subText:
      "Mission control — ensuring smooth launches, reliable systems, and cosmic-scale collaboration.",
    techs: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Apache Kafka", icon: SiApachekafka },
    ],
  },
];

const techStackSectionHeader = {
  mainHeading: "Our Technology Stack",
};

export { techStackSectionHeader };
