import { PortableTextChild, TypedObject } from "sanity";

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

enum TechStackTabs {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASES = "databases",
  MOBILE = "mobile",
  DEVOPSANDTOOLS = "devopsandtools",
}

interface IBlog {
  title: string;
  slug: string;
  publishedAt: Date;
  mainImage: {
    source: string;
    alt: string;
  };
  body: PortableTextChild[];
  author: {
    bio: TypedObject[];
    name: string;
    slug: string;
    source: string;
  };
}

type PortableTextBlock = {
  _key: string;
  _type: "block" | string;
  children?: PortableTextChild[];
  markDefs?: { _key: string; _type: string }[];
  style?: string;
};

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export {
  type Position,
  TechStackTabs,
  type IBlog,
  type PortableTextBlock,
  type ErrorProps,
};
