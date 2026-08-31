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
    title: "Private chats",
    detail:
      "Start private text and voice conversations with friends anywhere.",
    icon: "message" as const,
  },
  {
    title: "Send gifts",
    detail:
      "Share gifts with your favorite friends in private rooms or moments.",
    icon: "gift" as const,
  },
  {
    title: "Virtual gifts",
    detail: "Send stunning animated gifts to show your support.",
    icon: "sparkles" as const,
  },
];

export type Service = {
  id: string;
  step: string;
  title: string;
  description: string;
  bullets: string[];
  visual: "rooms" | "gifts" | "games";
  image: string | null;
};

export const services: Service[] = [
  {
    id: "rooms",
    step: "01",
    title: "Private & Public Rooms",
    description:
      "Endless number of rooms with members from 50 different countries",
    bullets: [
      "Open Mic & Public Rooms – Chat, sing, and showcase your talent",
      "VIP Privileges – Unique colors, special badges, and full control",
      "Private Rooms – Full privacy and conversation control.",
    ],
    visual: "rooms",
    image: "/services/Discover%20rooms.webp",
  },
  {
    id: "gifts",
    step: "02",
    title: "Gifts & Special Features",
    description:
      "Ongoing entertainment events and competitions to keep the fun alive—no room for boredom!.",
    bullets: [
      "Send and receive gifts from friends and share special moments",
      "Explore private accounts and stand out with your unique style",
      "Create challenges with your friends",
    ],
    visual: "gifts",
    image: "/services/leader%20board.webp",
  },
  {
    id: "games",
    step: "03",
    title: "Games",
    description: "FUnique and diverse games with amazing rewards await you.",
    bullets: ["Dice Challenge", "Candy Game", "Buraco Card"],
    visual: "games",
    image: "/services/games.webp",
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
    question: "How to recharge coins?",
    answer: "You can pay using a MasterCard or via Apple Pay .",
  },
  {
    question: "My recharge is not successful but my money is deducted",
    answer:
      "Contact us via email at INFO@WLIVE.com attach a screenshot of your receipt and bank .",
  },
  {
    question: "I can't receive verification codes!",
    answer:
      "Some old versions of W.Live don't have this feature. If you are using one of those versions, please update W.Live to the lastest version so you can give us feedback",
  },
  {
    question: "I have a problem with the microphone in a room.",
    answer:
      "If the microphone isn't working, check app permissions in your phone settings and allow W.Live to record audio. For further assistance, contact us at wbluetrading@gmail.com.",
  },
  {
    question: "Can I bind my phone number to my account?",
    answer:
      "For security reasons, a phone number can only be bind once and cannot be unbound. Tap your profile photo at the top, go to Settings, then Account, then Phone, and finally select Bind Phone Number.",
  },
  {
    question: 'How can I get "Post Talent" badge?',
    answer:
      'If you have 5,000 posts get featured, you will receive the golden "Post Talent" badge and can wear it.',
  },
];
