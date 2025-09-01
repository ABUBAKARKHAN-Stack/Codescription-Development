import { TypedObject } from "sanity";

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
  body: TypedObject[];
  author: {
    bio: TypedObject[];
    name: string;
    slug: string;
    source: string;
  };
}

export { type Position, TechStackTabs, type IBlog };
