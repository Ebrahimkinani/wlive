import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { RoomRow } from "../room-row";
import { SectionLabel } from "../section-label";
import { navTabByFeature, roomsData } from "../preview-data";

export function VoiceRoomsPreview() {
  return (
    <AppShell
      activeTab={navTabByFeature.rooms}
      header={<AppHeader title="Rooms" />}
    >
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
        <SectionLabel>Live now</SectionLabel>
        <div className="space-y-2">
          {roomsData.map((room, index) => (
            <RoomRow key={room.id} room={room} highlighted={index === 0} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
