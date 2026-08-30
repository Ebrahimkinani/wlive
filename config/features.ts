export type FeatureId =
  | "rooms"
  | "communities"
  | "discover"
  | "profiles"
  | "chats"
  | "gifts"
  | "events";

export type ProductFeature = {
  id: FeatureId;
  label: string;
  description: string;
  visual: string;
};

export const productFeatures: ProductFeature[] = [
  {
    id: "rooms",
    label: "Voice rooms",
    description:
      "Drop into live conversations — open mic, music, games, or just good company.",
    visual: "Rooms going live right now, filtered by topic and country.",
  },
  {
    id: "communities",
    label: "Communities",
    description:
      "Find your people around shared interests, languages, and moments.",
    visual: "Groups that feel like home, not another follower count.",
  },
  {
    id: "discover",
    label: "Discover",
    description:
      "Browse what's live across 50+ countries — by topic, mood, or who's talking.",
    visual: "A calm feed of rooms worth joining, not endless scrolling.",
  },
  {
    id: "profiles",
    label: "Profiles",
    description:
      "Show who you are with badges, presence, and a style that's yours.",
    visual: "Your identity in the room — visible, expressive, remembered.",
  },
  {
    id: "chats",
    label: "Private chats",
    description:
      "Text and voice with friends anywhere — one tap from the room you're in.",
    visual: "Conversations that stay close, even when the room goes quiet.",
  },
  {
    id: "gifts",
    label: "Gifts",
    description:
      "Send animated gifts in rooms and moments — a small way to show you care.",
    visual: "Support creators and friends with gifts that feel special.",
  },
  {
    id: "events",
    label: "Events",
    description:
      "Competitions, themed nights, and community moments that keep things alive.",
    visual: "Something worth showing up for, every week.",
  },
];

export const painPoints = [
  {
    title: "Hard to find a room that fits.",
    detail: "Too much noise, not enough signal.",
    icon: "mic" as const,
  },
  {
    title: "Conversations feel empty.",
    detail: "Scroll past, never stay.",
    icon: "radio" as const,
  },
  {
    title: "Hard to feel like you belong.",
    detail: "Followers aren't friends.",
    icon: "heart" as const,
  },
];

export type HowItWorksStep = {
  step: number;
  title: string;
  body: string;
};

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Join in seconds",
    body: "Create your profile and get into the conversation fast.",
  },
  {
    step: 2,
    title: "Discover rooms",
    body: "Find voice rooms, communities, and people that match your interests.",
  },
  {
    step: 3,
    title: "Speak and connect",
    body: "Listen, talk, react, and build real connections in live conversations.",
  },
  {
    step: 4,
    title: "Stay close",
    body: "Keep the connection going through private chats, profiles, and community presence.",
  },
];

export const trustFacts = [
  {
    title: "Built for daily connection",
    body: "Open W Live when you want company — rooms are live around the clock.",
  },
  {
    title: "Community tools included",
    body: "Report, block, and moderation help keep rooms respectful and safe.",
  },
  {
    title: "Your presence is yours",
    body: "Profiles, chats, and moments stay under your control — no hidden surprises.",
  },
];

export const liveStats = [
  { label: "Live rooms", value: "400+", hint: "Right now" },
  { label: "Countries", value: "4+", hint: "And growing" },
  { label: "People talking", value: "18K", hint: "This hour" },
  { label: "Communities", value: "27+", hint: "Active today" },
];

export const faqs = [
  {
    question: "What is W Live?",
    answer:
      "W Live is a live voice social app built around real-time conversations, communities, and discovery. Jump into rooms, meet people who share your interests, and connect in the moment.",
  },
  {
    question: "How do voice rooms work?",
    answer:
      "Browse what's live, tap a room, and you're in. Listen to the conversation and open your mic when you want to join in.",
  },
  {
    question: "Do I have to speak when I join a room?",
    answer:
      "Not at all. Plenty of people join just to listen, get a feel for the room, and enjoy the conversation without saying a word.",
  },
  {
    question: "How do I discover new rooms and communities?",
    answer:
      "Explore live rooms by topic, mood, or country, and browse communities built around shared interests. W Live is designed to surface conversations worth joining.",
  },
  {
    question: "Can I stay connected after leaving a room?",
    answer:
      "Yes. Profiles, private chats, and community presence help you keep in touch with people you meet, even after the room ends.",
  },
  {
    question: "Does W Live support private conversations?",
    answer:
      "Yes. You can send text and voice messages to friends directly in the app — a quieter way to stay close when you're not in a room.",
  },
  {
    question: "What are gifts on W Live?",
    answer:
      "Gifts are animated gestures you send during live moments in rooms. They're a simple way to show appreciation or add a little energy to the conversation.",
  },
  {
    question: "Can I create my own voice room?",
    answer:
      "Yes. You can set up your own room in the app — add a name and announcement, then invite others to join you.",
  },
  {
    question: "How does W Live keep the community safe?",
    answer:
      "W Live includes report and block tools, plus moderation support to help keep rooms respectful. Community guidelines set clear expectations for how people treat each other.",
  },
  {
    question: "Is W Live available on iPhone and Android?",
    answer:
      "Yes. Download W Live on the App Store or Google Play — use the download buttons on this page to get started.",
  },
  {
    question: "Can I use W Live just to listen?",
    answer:
      "Absolutely. Listening is a big part of the experience. Join rooms, enjoy the conversation, and speak only when you feel like it.",
  },
  {
    question: "What makes W Live different from regular messaging apps?",
    answer:
      "Messaging apps are built for back-and-forth texts. W Live is built for live voice — real people talking right now, in rooms you can discover and communities you can belong to.",
  },
];
