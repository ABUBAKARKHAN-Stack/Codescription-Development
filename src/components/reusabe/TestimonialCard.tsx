import React, { FC, useCallback, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Diamond, Star } from "lucide-react";

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
      className={`group relative rounded-2xl ${width ?? "w-full"} ${
        height ?? "h-64"
      } xsm:w-92 flex w-full flex-col justify-between overflow-hidden border border-white/[0.12] bg-white/[0.08]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        ease: "linear",
      }}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          )
        `,
        willChange: "transform, opacity",
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-60" />

      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0.08) 40%, 
              rgba(255, 255, 255, 0.03) 70%, 
              transparent 100%
            )
          `,
          filter: "blur(1px)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col gap-3 p-6">
        <div className="flex flex-col items-center justify-between min-[350px]:flex-row">
          <h3 className="text-lg font-semibold text-white/90 drop-shadow-sm">
            {username}
          </h3>
          <span className="flex items-center justify-center gap-x-1 rounded-full border border-white/[0.12] bg-white/[0.08] px-2 py-1 text-xs text-white/60 backdrop-blur-sm">
            {date}
            <Diamond className="size-2 fill-white/60 stroke-transparent" />
            {time}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <p className="text-sm leading-relaxed text-white/80 drop-shadow-sm">
            {feedback}
          </p>

          <div className="mt-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={shouldAnimate ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 + i * 0.05,
                }}
              >
                <Star
                  size={18}
                  className={
                    i < rating
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.4)] filter"
                      : "text-white/30"
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
};

export default TestimonialCard;
