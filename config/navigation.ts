import type { NotchItemData } from "@/components/ui/adaptive-notch-navigation-bar";
import {
  Award,
  CircleHelp,
  Coins,
  Images,
  Info,
  Mail,
  Route,
  Sparkles,
  Users,
} from "lucide-react";

export const navItems: NotchItemData[] = [
  { id: "about", label: "About", icon: Info },
  // { id: "features", label: "Features", icon: Layers3 },
  { id: "how-it-works", label: "How it works", icon: Route },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "events", label: "Events", icon: Images },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "currency", label: "Currency", icon: Coins },
  { id: "community", label: "Community", icon: Users },
  { id: "faq", label: "FAQ", icon: CircleHelp },
  { id: "contact", label: "Contact", icon: Mail },
];

export const footerLinks = navItems.map((item) => ({
  href: `#${item.id}`,
  label: item.label,
})) as { href: string; label: string }[];
