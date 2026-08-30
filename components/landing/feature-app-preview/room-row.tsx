import { Mic } from "lucide-react";

import { cn } from "@/lib/utils";

import { AvatarStack } from "./app-avatar";
import type { RoomPreview } from "./preview-data";

export function RoomRow({
  room,
  highlighted = false,
}: {
  room: RoomPreview;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5",
        highlighted ? "bg-brand-soft/60" : "bg-surface-raised"
      )}
    >
      <div className="relative shrink-0">
        <span
          className={cn(
            "flex size-9 items-center justify-center rounded-full",
            highlighted ? "bg-brand text-white" : "bg-surface-muted"
          )}
        >
          <Mic
            className={cn("size-3.5", highlighted ? "text-white" : "text-text-tertiary")}
            strokeWidth={1.75}
            aria-hidden
          />
        </span>
        {room.live ? (
          <span
            className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-card-elevated bg-emerald-500"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.6875rem] font-medium text-text-primary">
          {room.title}
        </p>
        <p className="mt-0.5 text-[0.625rem] text-text-tertiary">{room.meta}</p>
      </div>

      <AvatarStack initials={room.speakers} />
    </div>
  );
}
