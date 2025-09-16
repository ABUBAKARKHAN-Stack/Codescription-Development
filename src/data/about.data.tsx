import {
  BeyondDreamsIllustration,
  DeepThinkerIllustration,
  MissionLeaderIllustration,
  VisionInnovationIllustration,
} from "@/components/ui/illustrations";
import { brandName } from "@/constants/constants";
import {
  Handshake,
  Lightbulb,
  Users,
  Target,
  WandSparkles,
  Globe2,
} from "lucide-react";
import { PiRocket } from "react-icons/pi";

const aboutUsSectionHeader = {
  mainHeading: "About Us",
};

const ourStats = [
  { count: "1.5+", label: "Years Experience" },
  { count: "10+", label: "Technologies Mastered" },
  { count: "24/7", label: "Support Available" },
];

const storyItems = [
  {
    title: "How It All Began",
    illustration: {
      key: "DeepThinkerIllustration",
      svg: DeepThinkerIllustration,
    },
    icon: WandSparkles,
    content: (
      <>
        <span className="relative inline-block px-1 font-semibold">
          {brandName}
          <span className="absolute inset-0 inline-block bg-white/10"></span>
        </span>{" "}
        was born out of a simple idea: combining creativity and technology to
        make a real difference. What started as a spark of curiosity quickly
        grew into a mission to design solutions that inspire and empower people.
        From the very beginning, our foundation has been built on passion,
        innovation, and the belief that technology should feel human.
      </>
    ),
  },
  {
    title: "Our Mission",
    icon: Target,
    illustration: {
      key: "MissionLeaderIllustration",
      svg: MissionLeaderIllustration,
    },

    content: (
      <>
        At{" "}
        <span className="relative inline-block px-1 font-semibold">
          {brandName}
          <span className="absolute inset-0 inline-block bg-white/10"></span>
        </span>
        , our mission is to craft digital experiences that are purposeful,
        accessible, and transformative. We focus on creating solutions that not
        only solve problems but also inspire growth, trust, and creativity for
        everyone we collaborate with.
      </>
    ),
  },
  {
    title: "Our Vision",
    icon: Globe2,
    illustration: {
      key: "VisionInnovationIllustration",
      svg: VisionInnovationIllustration,
    },
    content: (
      <>
        At{" "}
        <span className="relative inline-block px-1 font-semibold">
          {brandName}
          <span className="absolute inset-0 inline-block bg-white/10"></span>
        </span>
        , we are not just building products, we are building possibilities. Our
        vision is to become a trusted partner for businesses and individuals who
        want to embrace the future with confidence. With innovation at our core,
        we aim to push boundaries, spark new ideas, and make technology a bridge
        to endless opportunities.
      </>
    ),
  },
  {
    title: "Today & Beyond",
    icon: PiRocket,
    illustration: {
      key: "BeyondDreamsIllustration",
      svg: BeyondDreamsIllustration,
    },
    content: (
      <>
        Today, we continue to move forward with the same passion and energy that
        started our journey. Every step we take is guided by our commitment to
        innovation, design excellence, and meaningful impact. Tomorrow holds
        even bigger dreams, and{" "}
        <span className="relative inline-block px-1 font-semibold">
          {brandName}
          <span className="absolute inset-0 inline-block bg-white/10"></span>
        </span>{" "}
        is here to bring them to life.
      </>
    ),
  },
];

const values = [
  {
    icon: (
      <Lightbulb className="size-8 text-purple-300 group-hover:text-white" />
    ),
    title: "Innovation",
    description:
      "We believe in pushing boundaries and exploring new ideas to craft solutions that are future-ready.",
  },
  {
    icon: (
      <Handshake className="size-8 text-purple-300 group-hover:text-white" />
    ),
    title: "Trust & Transparency",
    description:
      "Honesty and openness are at the core of every interaction. We build relationships, not just projects.",
  },
  {
    icon: <Users className="size-8 text-purple-300 group-hover:text-white" />,
    title: "Collaboration",
    description:
      "Great things happen when we work together. Teamwork and communication guide every step we take.",
  },
  {
    icon: (
      <PiRocket className="size-8 text-purple-300 group-hover:text-white" />
    ),
    title: "Excellence",
    description:
      "We are committed to delivering high-quality results that inspire confidence and long-term growth.",
  },
];

export { aboutUsSectionHeader, ourStats, storyItems, values };
