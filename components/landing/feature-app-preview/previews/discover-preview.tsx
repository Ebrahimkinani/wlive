import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { AppAvatar } from "../app-avatar";
import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { RoomRow } from "../room-row";
import { SectionLabel } from "../section-label";
import {
  communitiesData,
  discoverRooms,
  discoverTopics,
  navTabByFeature,
} from "../preview-data";

export function DiscoverPreview() {
  const suggestedCommunity = communitiesData[0];

  return (
    <AppShell
      activeTab={navTabByFeature.discover}
      header={<AppHeader title="Discover" />}
    >
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
        <div className="flex items-center gap-2 rounded-xl bg-surface-raised px-3 py-2">
          <Search className="size-3.5 text-text-tertiary" aria-hidden />
          <span className="text-[0.6875rem] text-text-tertiary">
            Search rooms, people…
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {discoverTopics.map((topic, index) => (
            <span
              key={topic}
              className={cn(
                "rounded-pill px-2.5 py-1 text-[0.625rem] font-medium",
                index === 0
                  ? "bg-brand-soft text-brand"
                  : "bg-surface-raised text-text-secondary"
              )}
            >
              {topic}
            </span>
          ))}
        </div>

        <SectionLabel>Trending</SectionLabel>
        <div className="space-y-2">
          {discoverRooms.map((room, index) => (
            <RoomRow key={room.id} room={room} highlighted={index === 0} />
          ))}
        </div>

        <SectionLabel>Suggested</SectionLabel>
        <div className="flex items-center gap-3 rounded-xl bg-surface-raised px-3 py-2.5">
          <AppAvatar initials={suggestedCommunity.initials} size="md" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.6875rem] font-medium text-text-primary">
              {suggestedCommunity.name}
            </p>
            <p className="text-[0.625rem] text-text-tertiary">
              {suggestedCommunity.members}
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
