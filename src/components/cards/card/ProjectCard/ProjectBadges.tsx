import React from "react";
import { Calendar, Star } from "lucide-react";
import Badge from "@/components/ui/badge";

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
          <Badge variant="secondary" className="w-fit" badgeText={category} />
        )}
        {starred && (
          <Badge
            variant="default"
            icon={Star}
            className="w-fit"
            iconFillColor="fill-[oklch(0.8_0.08_300)]"
            badgeText={"Featured"}
          />
        )}
      </div>
      {year && (
        <Badge
          variant="secondary"
          className="w-fit"
          icon={Calendar}
          badgeText={year}
        />
      )}
    </div>
  ),
);

ProjectBadges.displayName = "ProjectBadges";
