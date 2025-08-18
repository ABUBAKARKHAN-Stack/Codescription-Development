import React, { FC, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { LucideIcon } from "lucide-react";
import { CardContent } from "./CardContent";
import { SpaceIcon } from "./SpaceIcon";

type FeatureCardProps = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  showOverlay?: boolean;
  index?: number;
  width?: string;
  height?: string;
  //  isLast?: boolean;
};

const WhyTetraCard: FC<FeatureCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  link = "#",
  index = 0,
  height,
  width,
  //  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), index * 50);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <div
      className={`group relative rounded-xl p-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <SpaceIcon Icon={Icon} index={index} shouldAnimate={shouldAnimate} />
      <CardContent
        title={title}
        description={description}
        index={index}
        shouldAnimate={shouldAnimate}
        isInView={isInView}
      />
    </div>
  );
};

export default WhyTetraCard;
