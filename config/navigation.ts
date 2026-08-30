import type { NotchItemData } from "@/components/ui/adaptive-notch-navigation-bar";
import {
  CircleHelp,
  Layers3,
  Radio,
  Route,
  Shield,
  Users,
} from "lucide-react";

export const navItems: NotchItemData[] = [
  { id: "product", label: "Live", icon: Radio },
  { id: "features", label: "Features", icon: Layers3 },
  { id: "how-it-works", label: "How it works", icon: Route },
  { id: "community", label: "Community", icon: Users },
  { id: "safety", label: "Safety", icon: Shield },
  { id: "faq", label: "FAQ", icon: CircleHelp },
];

export const footerLinks = [
  { href: "#product", label: "Live" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#community", label: "Community" },
  { href: "#activity", label: "Activity" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" },
] as const;
