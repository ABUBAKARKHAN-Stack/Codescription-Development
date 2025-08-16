import { Zap, Users, Shield, Eye, Code2, Handshake } from "lucide-react";

const whyChooseData = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your projects delivered quickly without compromising on quality, thanks to our agile workflows and streamlined communication.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Expert Team",
    description:
      "Work with seasoned developers and designers who follow industry best practices to craft scalable and efficient solutions.",
    icon: Users,
  },
  {
    id: 3,
    title: "Secure Architecture",
    description:
      "We build with a security-first mindset, implementing enterprise-grade protection and best practices from day one.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Transparent Process",
    description:
      "Stay in the loop with clear timelines, regular updates, and full visibility into every phase of your project.",
    icon: Eye,
  },
  {
    id: 5,
    title: "Modern Tech Stacks",
    description:
      "We leverage the latest frameworks and technologies like Next.js, Node, Docker, and more to future-proof your products.",
    icon: Code2,
  },
  {
    id: 6,
    title: "Client-Centric Approach",
    description:
      "Your goals are our priority. We listen, adapt, and iterate to ensure the end result matches your vision perfectly.",
    icon: Handshake,
  },
];

const whyChooseSectionHeader = {
  mainHeading: "Why Our Clients Trust Us",
  subText:
    "Our code is clean, our communication is clear, and our delivery is fast.",
};

export {
  whyChooseData,
  whyChooseSectionHeader
};
