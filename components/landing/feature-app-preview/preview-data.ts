export type NavTab = "home" | "discover" | "rooms" | "inbox" | "profile";

export type RoomPreview = {
  id: string;
  title: string;
  meta: string;
  live?: boolean;
  speakers: string[];
};

export type CommunityPreview = {
  id: string;
  name: string;
  members: string;
  active?: boolean;
  initials: string;
};

export type EventPreview = {
  id: string;
  title: string;
  date: string;
  time: string;
  host: string;
  hostInitials: string;
};

export const roomsData: RoomPreview[] = [
  {
    id: "open-mic",
    title: "Open mic lounge",
    meta: "24 listening · 6 speakers",
    live: true,
    speakers: ["SA", "OM", "LI"],
  },
  {
    id: "music-night",
    title: "Music night",
    meta: "18 in room",
    live: true,
    speakers: ["KA", "NO"],
  },
  {
    id: "late-talk",
    title: "Late talk",
    meta: "9 speakers",
    speakers: ["AM"],
  },
];

export const communitiesData: CommunityPreview[] = [
  {
    id: "arabic-lounge",
    name: "Arabic lounge",
    members: "1.2K members",
    active: true,
    initials: "AL",
  },
  {
    id: "gaming-crew",
    name: "Gaming crew",
    members: "840 members",
    initials: "GC",
  },
  {
    id: "poetry-hour",
    name: "Poetry hour",
    members: "320 members",
    initials: "PH",
  },
];

export const discoverTopics = ["Comedy", "Chill vibes", "New friends", "Music"];

export const discoverRooms: RoomPreview[] = [
  {
    id: "comedy-qatar",
    title: "Comedy · Qatar",
    meta: "32 listening",
    live: true,
    speakers: ["QA", "RY"],
  },
  {
    id: "chill-uae",
    title: "Chill vibes · UAE",
    meta: "14 in room",
    speakers: ["AE"],
  },
];

export const profileData = {
  name: "Sara Al-Rashid",
  username: "sara.live",
  bio: "Room host · Music & late-night talks",
  followers: "2.4K",
  following: "186",
  recentRooms: ["Open mic lounge", "Music night"],
};

export const chatData = {
  contact: { name: "Amira", initials: "AM" },
  messages: [
    { id: "1", type: "text" as const, text: "See you in the room?", incoming: true, time: "9:41 PM" },
    { id: "2", type: "voice" as const, text: "Voice note · 0:12", incoming: true, time: "9:42 PM" },
    { id: "3", type: "text" as const, text: "On my way 🎙️", incoming: false, time: "9:43 PM" },
  ],
};

export const giftsData = {
  roomTitle: "Open mic lounge",
  speakers: ["SA", "OM", "LI"],
  gift: { label: "Rose sent to Sara", from: "Omar" },
};

export const eventsData: EventPreview[] = [
  {
    id: "talent-night",
    title: "Talent night",
    date: "Fri",
    time: "8:00 PM",
    host: "Omar",
    hostInitials: "OM",
  },
  {
    id: "community-games",
    title: "Community games",
    date: "Sat",
    time: "6:30 PM",
    host: "Lina",
    hostInitials: "LI",
  },
  {
    id: "open-mic-finals",
    title: "Open mic finals",
    date: "Sun",
    time: "9:00 PM",
    host: "Sara",
    hostInitials: "SA",
  },
];

export const navTabByFeature = {
  rooms: "rooms",
  communities: "home",
  discover: "discover",
  profiles: "profile",
  chats: "inbox",
  gifts: "rooms",
  events: "home",
} as const satisfies Record<string, NavTab>;
