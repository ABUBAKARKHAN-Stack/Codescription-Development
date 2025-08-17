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
  MOBILE = "moble",
  DEVOPSANDTOOLS="devopsandtools"
}

export {
   type Position,
   TechStackTabs
   };
