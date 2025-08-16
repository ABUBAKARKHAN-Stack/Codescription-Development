import React, { FC, useCallback, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";


type TestimonialCardProps = {
  id: number;
  username: string;
  feedback: string;
  date: string;
  time: string;
  rating: number;
  index?: number;
  width?: string;
  height?: string;
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  id,
  username,
  feedback,
  date,
  time,
  rating,
  index = 0,
  height,
  width,
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
    <motion.div
      className={`group relative rounded-xl ${width ?? "w-full"} ${
        height ?? "h-64"
      } flex flex-col justify-between overflow-hidden bg-[oklch(0.12_0.01_280)]/95 px-6 py-6 backdrop-blur-sm before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[oklch(0.75_0.1_290)] before:via-[oklch(0.65_0.22_295)] before:to-[oklch(0.8_0.08_300)] before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-[oklch(0.16_0.015_280)]/98`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: index * 0.1,
      }}
      style={{
        boxShadow:
          "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
        willChange: "transform, opacity",
      }}
    >
      
      {/* Content */}
      <div className="relative z-30 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{username}</h3>
          <span className="text-xs text-gray-400">
            {date} • {time}
          </span>
        </div>

        <p className="text-gray-200 text-sm leading-relaxed">{feedback}</p>

        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
