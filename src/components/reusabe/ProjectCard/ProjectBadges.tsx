import React from "react";
import { Calendar, Star } from "lucide-react";

interface ProjectBadgesProps {
  category?: string;
  starred?: boolean;
  year?: string;
}

export const ProjectBadges: React.FC<ProjectBadgesProps> = React.memo(
  ({ category, starred, year }) => (
    <div className="absolute top-3 right-3 left-3 z-10 flex items-start justify-between">
      <div className="flex gap-2">
        {category && (
          <span className="rounded-full border border-[oklch(0.65_0.22_295)]/30 bg-[oklch(0.12_0.01_280)]/80 px-2 py-1 text-xs font-medium text-[oklch(0.75_0.1_290)] backdrop-blur-md">
            {category}
          </span>
        )}
        {starred && (
          <div className="flex items-center gap-1 rounded-full border border-[oklch(0.8_0.08_300)]/40 bg-gradient-to-r from-[oklch(0.65_0.22_295)]/30 to-[oklch(0.75_0.1_280)]/30 px-2 py-1 backdrop-blur-md">
            <Star className="size-3 fill-[oklch(0.8_0.08_300)] text-[oklch(0.8_0.08_300)]" />
            <span className="text-xs font-medium text-[oklch(0.95_0.01_0)]">
              Featured
            </span>
          </div>
        )}
      </div>
      {year && (
        <div className="flex items-center gap-1 rounded-full border border-[oklch(0.65_0.22_295)]/30 bg-[oklch(0.12_0.01_280)]/80 px-2 py-1 text-[oklch(0.75_0.1_290)] backdrop-blur-md">
          <Calendar className="size-3" />
          <span className="text-xs font-medium">{year}</span>
        </div>
      )}
    </div>
  ),
);

ProjectBadges.displayName = "ProjectBadges";
