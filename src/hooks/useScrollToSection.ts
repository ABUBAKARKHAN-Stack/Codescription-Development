import { useLenis } from "@/context/LenisContext";

export const useScrollToSection = () => {
  const lenis = useLenis();

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector) as HTMLElement | null;
    if (section && lenis) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return { scrollToSection };
};
