import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

type Props = {
  variant?: "default" | "secondary" | "muted" | "accent";
  className?: string;
  badgeText: string;
  icon?: LucideIcon;
  iconFillColor?: string;
};

const badgeVariants = cva(
  "flex items-center rounded-full backdrop-blur-md gap-1 px-2 py-1 w-full shadow-xs",
  {
    variants: {
      variant: {
        default:
          "border border-[oklch(0.8_0.08_300)]/40 bg-gradient-to-r from-[oklch(0.65_0.22_295)]/30 to-[oklch(0.75_0.1_280)]/30 text-[oklch(0.8_0.08_300)]",
        secondary:
          "border border-secondary/30 bg-secondary/90  text-[oklch(0.75_0.1_290)]",
        muted: "border border-muted/30 bg-muted/90 text-muted-foreground",
        accent: "border border-accent/30 bg-accent/90 text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Badge: FC<Props> = ({
  variant,
  className,
  badgeText,
  icon: Icon,
  iconFillColor,
}) => {
  return (
    <div role="badge" className={cn(badgeVariants({ variant, className }))}>
      {Icon && <Icon className={cn("size-3", iconFillColor)} />}
      <span className="text-xs font-medium">{badgeText}</span>
    </div>
  );
};

export default Badge;
