import { AppAvatar } from "../app-avatar";
import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { SectionLabel } from "../section-label";
import { eventsData, navTabByFeature } from "../preview-data";

export function EventsPreview() {
  return (
    <AppShell
      activeTab={navTabByFeature.events}
      header={<AppHeader title="Events" />}
    >
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
        <SectionLabel>This week</SectionLabel>
        <div className="space-y-2">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={
                index === 0
                  ? "flex items-center gap-3 rounded-xl bg-brand-soft/50 px-3 py-2.5"
                  : "flex items-center gap-3 rounded-xl bg-surface-raised px-3 py-2.5"
              }
            >
              <div className="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-surface-raised text-center">
                <span className="text-[0.5625rem] font-medium uppercase text-text-tertiary">
                  {event.date}
                </span>
                <span className="text-[0.625rem] font-semibold text-text-primary">
                  {event.time.replace(" PM", "").replace(" AM", "")}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.6875rem] font-medium text-text-primary">
                  {event.title}
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <AppAvatar initials={event.hostInitials} size="sm" />
                  <span className="text-[0.625rem] text-text-tertiary">
                    Hosted by {event.host}
                  </span>
                </div>
              </div>
              <span className="shrink-0 rounded-pill bg-brand-soft px-2.5 py-1 text-[0.625rem] font-medium text-brand">
                {index === 0 ? "Join" : "Remind"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
