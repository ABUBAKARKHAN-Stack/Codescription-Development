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

interface IAuthor {
  name: string;
  source: string;
  role: string;
}

interface IMainImage {
  source: string;
  alt: string;
}

enum TechStackTabs {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASES = "databases",
  MOBILE = "mobile",
  DEVOPSANDTOOLS = "devopsandtools",
}

interface IBlog {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  mainImage: IMainImage;
  body: PortableTextChild[];
  author: IAuthor;
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
  TechStackTabs,
  type Position,
  type IBlog,
  type PortableTextBlock,
  type IAuthor,
  type IMainImage,
  type ErrorProps,
};
