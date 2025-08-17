import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;

  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;

  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;

  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;

  position?: "vertical" | "horizontal";
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  position = "horizontal",
  repeat = 4,
  ...props
}: MarqueeProps) {
  const isHorizontal = position === "horizontal";
  const isVertical = position === "vertical";

  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": isHorizontal,
          "flex-col": isVertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": isHorizontal,
              "animate-marquee-vertical flex-col": isVertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
