// data/serviceDetails.data.ts
import {
  LayoutTemplate,
  Smartphone,
  Layers3,
  ShoppingCart,
  Paintbrush,
  ServerCog,
} from "lucide-react";

export const serviceDetails = {
  "web-development": {
    title: "Web Development",
    icon: LayoutTemplate,
    shortDescription:
      "Build fast, responsive, and SEO-friendly websites tailored to your brand and goals.",
    fullContent: [
      "We create modern, high-performing websites that combine clean design with reliable technology.",
      "Whether you need a corporate site, a portfolio, or a large-scale platform, our focus is on delivering websites that load quickly, rank well on search engines, and provide a seamless experience across all devices.",
    ],
    features: [
      {
        title: "What’s Included",
        items: [
          "Fully responsive, mobile-first layouts",
          "Optimized for SEO and speed",
          "Scalable and secure architecture",
          "CMS integrations (Sanity, WordPress, Strapi, etc.)",
        ],
      },
      {
        title: "Technologies",
        items: ["Next.js", "React", "TailwindCSS", "Node.js", "TypeScript"],
      },
    ],
  },

  "app-development": {
    title: "App Development",
    icon: Smartphone,
    shortDescription:
      "Create high-performance mobile apps designed for seamless use on iOS and Android devices.",
    fullContent: [
      "We build mobile apps that are fast, intuitive, and designed to grow with your business.",
      "From strategy and design to deployment, we ensure your app delivers value to users while being reliable and scalable.",
    ],
    features: [
      {
        title: "Highlights",
        items: [
          "Native-like performance on iOS & Android",
          "Clean and modern UI/UX design",
          "App Store & Play Store publishing support",
          "Offline support and push notifications",
        ],
      },
      {
        title: "Technologies",
        items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      },
    ],
  },

  "full-stack-development": {
    title: "Full Stack Development",
    icon: Layers3,
    shortDescription:
      "Deliver complete applications with robust backends and intuitive frontend experiences.",
    fullContent: [
      "We provide end-to-end development — covering everything from databases to user-facing interfaces.",
      "Our full stack solutions ensure your product is secure, scalable, and user-friendly, all built with modern tools and best practices.",
    ],
    features: [
      {
        title: "Services",
        items: [
          "REST & GraphQL API development",
          "Authentication & authorization",
          "Cloud hosting and deployment pipelines",
          "Real-time features like chat and live updates",
        ],
      },
      {
        title: "Technologies",
        items: [
          "Node.js",
          "Express",
          "Next.js",
          "MongoDB",
          "PostgreSQL",
          "GraphQL",
          "Docker",
          "AWS",
        ],
      },
    ],
  },

  "e-commerce": {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    shortDescription:
      "Develop secure, scalable online stores with smooth checkout and payment integration.",
    fullContent: [
      "We design and develop secure, conversion-focused online stores tailored to your business needs.",
      "From product catalogs to payment gateways and logistics integrations, we deliver complete e-commerce solutions that help your business scale globally.",
    ],
    features: [
      {
        title: "What You Get",
        items: [
          "Custom storefronts with intuitive shopping flows",
          "Secure checkout & multiple payment options",
          "Inventory management and order tracking",
          "Marketing integrations (email, analytics, recommendations)",
        ],
      },
      {
        title: "Platforms & Tech",
        items: [
          "Shopify",
          "WooCommerce",
          "Next.js Commerce",
          "Stripe",
          "PayPal",
          "Headless CMS",
        ],
      },
    ],
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    icon: Paintbrush,
    shortDescription:
      "Design visually engaging and user-friendly interfaces that boost interaction and retention.",
    fullContent: [
      "We design interfaces that are both beautiful and functional, ensuring every interaction feels natural and effortless.",
      "Our design process blends research, creativity, and usability testing to create products that people love using.",
    ],
    features: [
      {
        title: "Deliverables",
        items: [
          "Wireframes & interactive prototypes",
          "Complete design systems & style guides",
          "User testing and iterative improvements",
          "Accessibility-first approach",
        ],
      },
      {
        title: "Tools",
        items: ["Figma", "Sketch", "Adobe XD", "Framer"],
      },
    ],
  },

  "devops-automation": {
    title: "DevOps & Automation",
    icon: ServerCog,
    shortDescription:
      "Automate deployment and monitoring with CI/CD pipelines and modern cloud infrastructure.",
    fullContent: [
      "We help teams deliver faster and safer with automation, monitoring, and cloud-native infrastructure.",
      "Our DevOps services reduce downtime, speed up deployments, and make scaling simple.",
    ],
    features: [
      {
        title: "Services",
        items: [
          "Automated CI/CD pipelines",
          "Infrastructure as Code (IaC)",
          "Cloud migration & scaling",
          "Monitoring, logging & alerting",
        ],
      },
      {
        title: "Technologies",
        items: [
          "Docker",
          "Kubernetes",
          "AWS",
          "Azure",
          "GCP",
          "GitHub Actions",
          "Jenkins",
          "Terraform",
        ],
      },
    ],
  },
};
