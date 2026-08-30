import { Mic, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { AppAvatar } from "../app-avatar";
import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { chatData, navTabByFeature } from "../preview-data";

export function ChatsPreview() {
  const { contact, messages } = chatData;

  return (
    <AppShell
      activeTab={navTabByFeature.chats}
      showBottomNav={false}
      header={
        <AppHeader
          title={contact.name}
          showBack
          rightSlot={<AppAvatar initials={contact.initials} size="sm" />}
        />
      }
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col gap-2 overflow-hidden px-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[85%]",
                message.incoming ? "self-start" : "self-end"
              )}
            >
              {message.type === "voice" ? (
                <div className="rounded-2xl rounded-bl-md bg-surface-raised px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 flex-1 items-center gap-0.5">
                      {[3, 5, 8, 6, 9, 4, 7, 5].map((h, i) => (
                        <span
                          key={i}
                          className="w-0.5 rounded-full bg-brand"
                          style={{ height: `${h * 2}px` }}
                          aria-hidden
                        />
                      ))}
                    </div>
                    <Mic className="size-3 text-brand" aria-hidden />
                  </div>
                  <p className="mt-1 text-[0.5625rem] text-text-tertiary">
                    {message.time}
                  </p>
                </div>
              ) : (
                <div
                  className={cn(
                    "rounded-2xl px-3 py-2",
                    message.incoming
                      ? "rounded-bl-md bg-surface-raised text-text-primary"
                      : "rounded-br-md bg-brand-soft text-text-primary"
                  )}
                >
                  <p className="text-[0.6875rem]">{message.text}</p>
                  <p className="mt-1 text-[0.5625rem] text-text-tertiary">
                    {message.time}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-border px-3 py-2.5">
          <div className="flex flex-1 items-center rounded-full bg-surface-raised px-3 py-1.5">
            <span className="text-[0.6875rem] text-text-tertiary">Message…</span>
          </div>
          <span className="flex size-7 items-center justify-center rounded-full bg-brand text-white">
            <Plus className="size-3.5" aria-hidden />
          </span>
        </div>
      </div>
    </AppShell>
  );
}
