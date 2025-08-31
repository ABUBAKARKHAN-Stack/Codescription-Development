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

type BlogPost = {
  title:string;
  slug:string;
}

export {
  type Position,
  TechStackTabs
};
