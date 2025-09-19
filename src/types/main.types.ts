import { PortableTextChild, TypedObject } from "sanity";

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

interface PortableTextBlock {
  _key: string;
  _type: "block" | string;
  children?: PortableTextChild[];
  markDefs?: { _key: string; _type: string }[];
  style?: string;
}

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

interface ContactFormType {
  name: string;
  email: string;
}

export {
  TechStackTabs,
  type IBlog,
  type PortableTextBlock,
  type IAuthor,
  type IMainImage,
  type ErrorProps,
};
