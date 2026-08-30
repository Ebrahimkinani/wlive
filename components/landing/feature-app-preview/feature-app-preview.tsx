import type { ComponentType } from "react";

import type { FeatureId } from "@/config/features";

import { ChatsPreview } from "./previews/chats-preview";
import { CommunitiesPreview } from "./previews/communities-preview";
import { DiscoverPreview } from "./previews/discover-preview";
import { EventsPreview } from "./previews/events-preview";
import { GiftsPreview } from "./previews/gifts-preview";
import { ProfilePreview } from "./previews/profile-preview";
import { VoiceRoomsPreview } from "./previews/voice-rooms-preview";

const previewByFeature: Record<FeatureId, ComponentType> = {
  rooms: VoiceRoomsPreview,
  communities: CommunitiesPreview,
  discover: DiscoverPreview,
  profiles: ProfilePreview,
  chats: ChatsPreview,
  gifts: GiftsPreview,
  events: EventsPreview,
};

export function FeatureAppPreview({
  id,
}: {
  id: FeatureId;
  label: string;
  caption: string;
}) {
  const Preview = previewByFeature[id];
  return <Preview />;
}

export { FeatureAppPreview as FeatureVisual };
