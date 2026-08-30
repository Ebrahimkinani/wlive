import { Gift } from "lucide-react";

import { AvatarStack } from "../app-avatar";
import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { giftsData, navTabByFeature } from "../preview-data";

export function GiftsPreview() {
  const { roomTitle, speakers, gift } = giftsData;

  return (
    <AppShell
      activeTab={navTabByFeature.gifts}
      header={
        <AppHeader
          title={roomTitle}
          rightSlot={
            <span className="flex items-center gap-1 rounded-pill bg-brand-soft px-2 py-0.5 text-[0.5625rem] font-medium text-brand">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              Live
            </span>
          }
        />
      }
    >
      <div className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-4 py-5">
        <div className="flex flex-col items-center gap-4 pt-2">
          <AvatarStack initials={speakers} max={3} />
          <p className="text-[0.625rem] text-text-tertiary">3 speakers · 24 listening</p>
        </div>

        <div className="w-full rounded-xl bg-surface-raised px-3 py-2.5">
          <p className="text-[0.625rem] font-medium uppercase tracking-wider text-text-tertiary">
            Send a gift
          </p>
          <div className="mt-2 flex gap-2">
            {["Rose", "Crown", "Star"].map((item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? "flex flex-1 flex-col items-center gap-1 rounded-lg bg-brand-soft px-2 py-2"
                    : "flex flex-1 flex-col items-center gap-1 rounded-lg bg-surface-muted px-2 py-2"
                }
              >
                <Gift
                  className={index === 0 ? "size-4 text-brand" : "size-4 text-text-tertiary"}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span
                  className={
                    index === 0
                      ? "text-[0.5625rem] font-medium text-brand"
                      : "text-[0.5625rem] text-text-tertiary"
                  }
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center gap-2 rounded-xl border border-border bg-card-raised px-3 py-2 shadow-soft">
          <Gift className="size-3.5 shrink-0 text-brand" aria-hidden />
          <div className="min-w-0">
            <p className="text-[0.6875rem] font-medium text-text-primary">
              {gift.label}
            </p>
            <p className="text-[0.625rem] text-text-tertiary">from {gift.from}</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
