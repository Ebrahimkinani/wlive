import {
  Compass,
  Home,
  MessageCircle,
  Mic,
  User,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type { NavTab } from "./preview-data";

const tabs: { id: NavTab; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "discover", label: "Discover", icon: Compass },
  { id: "rooms", label: "Rooms", icon: Mic },
  { id: "inbox", label: "Inbox", icon: MessageCircle },
  { id: "profile", label: "Profile", icon: User },
];

export function AppBottomNav({ activeTab }: { activeTab: NavTab }) {
  return (
    <nav
      className="flex items-center justify-around border-t border-border px-2 py-2"
      aria-label="App navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = tab.id === activeTab;

        return (
          <div
            key={tab.id}
            className={cn(
              "flex flex-col items-center gap-0.5 px-1.5 py-0.5",
              active ? "text-brand" : "text-text-tertiary"
            )}
            aria-hidden
          >
            <Icon className="size-3.5" strokeWidth={active ? 2 : 1.5} />
            <span className="text-[0.5625rem] font-medium">{tab.label}</span>
          </div>
        );
      })}
    </nav>
  );
}
