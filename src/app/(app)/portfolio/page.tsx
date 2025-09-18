export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our Innovative Projects Are Coming Soon!",
};
import ComingSoonSection from "@/components/section/portfolio/ComingSoonSection";
import { Metadata } from "next";

const PortfolioPage = () => {
  return (
    <>
      <ComingSoonSection />
    </>
  );
};

export default PortfolioPage;
