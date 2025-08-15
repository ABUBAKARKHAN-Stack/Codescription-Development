import { useLenis } from "@/context/LenisContext";

export const useScrollToSection = () => {
  const lenis = useLenis();

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector) as HTMLElement | null;
    if (section && lenis) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return { scrollToSection };
};
