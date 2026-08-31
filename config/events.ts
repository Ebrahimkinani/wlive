export type EventCategory = "app" | "rooms" | "games";

export type EventFilter = "all" | EventCategory;

export type EventItem = {
  id: string;
  title: string;
  categories: EventCategory[];
  /** Set to a public path (e.g. "/images/events/explore.png") when assets are ready. */
  image: string | null;
};

export const EVENT_FILTERS: { id: EventFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "app", label: "app" },
  { id: "rooms", label: "rooms" },
  { id: "games", label: "games" },
];

export const EVENT_ITEMS: EventItem[] = [
  {
    id: "explore",
    title: "EXPLORE",
    categories: ["app", "games"],
    image: "/events/explore.webp",
  },
  {
    id: "discover-rooms",
    title: "DISCOVER ROOMS",
    categories: ["rooms"],
    image: "/events/Discover%20rooms.webp",
  },
  {
    id: "games",
    title: "GAMES",
    categories: ["games"],
    image: "/events/games.webp",
  },
  {
    id: "broadcast",
    title: "BROADCAST",
    categories: ["app"],
    image: "/events/broadcast.webp",
  },
  {
    id: "messages",
    title: "MESSAGES",
    categories: ["rooms"],
    image: "/events/meassges.webp",
  },
  {
    id: "dice-challenge",
    title: "DICE CHALLENGE",
    categories: ["games"],
    image: "/events/dice%20challenge%20.webp",
  },
  {
    id: "friends-list",
    title: "FRIENDS LIST",
    categories: ["app"],
    image: "/events/friends%20list.webp",
  },
  {
    id: "private-message",
    title: "PRIVATE MESSAGE",
    categories: ["rooms"],
    image: "/events/private%20masages.webp",
  },
];

export function getEventAltText(title: string): string {
  const label = title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `W Live ${label} screen`;
}

export function filterEventItems(
  items: EventItem[],
  filter: EventFilter
): EventItem[] {
  if (filter === "all") return items;
  return items.filter((item) => item.categories.includes(filter));
}
