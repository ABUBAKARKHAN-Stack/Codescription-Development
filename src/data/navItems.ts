import { Home, Users, Cog, Layers, BookOpen, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users }, //* Team / Company intro
  { name: "Services", href: "/services", icon: Cog }, //* Software services
  { name: "Portfolio", href: "/portfolio", icon: Layers }, //* Projects showcase
  { name: "Blog", href: "/blog", icon: BookOpen }, //* Articles, case studies
  // { name: "Contact Us", href: "/contact", icon: Phone },
];

export { navLinks };
