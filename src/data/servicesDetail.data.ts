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
    fullContent: `
We specialize in modern web development using Next.js, React, and scalable backends.

Our approach ensures your website isn't just beautiful but also **high-performing and secure**. From small business websites to enterprise-level platforms, we build digital experiences that convert visitors into customers.

### What you get:
- Responsive & SEO-friendly websites
- Optimized for speed and performance
- Secure and scalable architecture
- CMS integrations (WordPress, Sanity, Strapi, etc.)

### Technologies we use:
Next.js, React, TailwindCSS, Node.js, TypeScript, Vercel/Netlify.
    `,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading",
      "CMS Integration",
    ],
  },

  "app-development": {
    title: "App Development",
    icon: Smartphone,
    shortDescription:
      "Create high-performance mobile apps designed for seamless use on iOS and Android devices.",
    fullContent: `
Our team builds robust cross-platform mobile apps with a focus on **scalability and great user experience**.

We work closely with you from ideation to launch, ensuring your app meets user needs while staying technically future-proof.

### Highlights:
- Native-like performance
- Modern UI/UX
- Smooth deployment & app store publishing
- Offline support and push notifications

### Technologies we use:
React Native, Flutter, Swift, Kotlin, Firebase, Expo.
    `,
    features: ["iOS & Android", "React Native", "Push Notifications"],
  },

  "full-stack-development": {
    title: "Full Stack Development",
    icon: Layers3,
    shortDescription:
      "Deliver complete applications with robust backends and intuitive frontend experiences.",
    fullContent: `
We provide **end-to-end full stack solutions** that combine powerful backends with seamless frontends.

Our developers cover everything from database design to frontend interaction, ensuring your product is efficient, secure, and user-friendly.

### Services include:
- REST & GraphQL APIs
- Cloud hosting & deployments
- Authentication & authorization
- Real-time features (chat, live updates)

### Technologies we use:
Node.js, Express, Next.js, MongoDB, PostgreSQL, GraphQL, Docker, AWS.
    `,
    features: ["Frontend + Backend", "Cloud Hosting", "CI/CD Pipelines"],
  },

  "e-commerce": {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    shortDescription:
      "Develop secure, scalable online stores with smooth checkout and payment integration.",
    fullContent: `
We build **e-commerce experiences** that are fast, secure, and designed to increase sales.

From product catalogues to complex integrations with payment gateways and logistics, we deliver online stores that help your business scale globally.

### What you get:
- Custom storefronts with intuitive UI
- Secure checkout & payment gateways
- Inventory management and order tracking
- Marketing integrations (email, analytics, recommendations)

### Platforms & Tech:
Shopify, WooCommerce, Next.js Commerce, Stripe, PayPal, Headless CMS.
    `,
    features: ["Shopping Cart", "Payment Integration", "Analytics Dashboard"],
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    icon: Paintbrush,
    shortDescription:
      "Design visually engaging and user-friendly interfaces that boost interaction and retention.",
    fullContent: `
We craft **beautiful and functional digital interfaces** that prioritize usability and aesthetics.

Our process includes user research, wireframing, prototyping, and usability testing, ensuring your product looks great and feels intuitive.

### Deliverables:
- Wireframes & interactive prototypes
- Design systems & style guides
- User testing and iteration
- Accessibility-first design

### Tools we use:
Figma, Sketch, Adobe XD, Framer.
    `,
    features: ["Wireframes", "Prototypes", "Design Systems"],
  },

  "devops-automation": {
    title: "DevOps & Automation",
    icon: ServerCog,
    shortDescription:
      "Automate deployment and monitoring with CI/CD pipelines and modern cloud infrastructure.",
    fullContent: `
Our DevOps team ensures your systems are **resilient, scalable, and easy to maintain**. We automate deployments and monitoring, so you can ship faster with fewer errors.

### Services:
- CI/CD pipelines for rapid deployment
- Infrastructure as Code (IaC)
- Cloud migration & scaling
- Monitoring, logging & alerting

### Technologies we use:
Docker, Kubernetes, AWS, Azure, GCP, GitHub Actions, Jenkins, Terraform.
    `,
    features: ["CI/CD", "Cloud Infrastructure", "Monitoring"],
  },
};
