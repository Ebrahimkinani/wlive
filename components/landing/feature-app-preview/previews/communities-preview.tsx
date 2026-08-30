import { AppAvatar } from "../app-avatar";
import { AppHeader } from "../app-header";
import { AppShell } from "../app-shell";
import { SectionLabel } from "../section-label";
import { communitiesData, navTabByFeature } from "../preview-data";

export function CommunitiesPreview() {
  return (
    <AppShell
      activeTab={navTabByFeature.communities}
      header={<AppHeader title="Communities" />}
    >
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
        <SectionLabel>Your groups</SectionLabel>
        <div className="space-y-2.5">
          {communitiesData.map((community) => (
            <div
              key={community.id}
              className="overflow-hidden rounded-xl bg-surface-raised"
            >
              <div className="h-8 bg-brand-soft/50" aria-hidden />
              <div className="flex items-center gap-3 px-3 pb-3 pt-2">
                <AppAvatar initials={community.initials} size="md" ring />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-[0.6875rem] font-medium text-text-primary">
                      {community.name}
                    </p>
                    {community.active ? (
                      <span
                        className="size-1.5 shrink-0 rounded-full bg-emerald-500"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-[0.625rem] text-text-tertiary">
                    {community.members}
                  </p>
                </div>
                <span className="shrink-0 rounded-pill bg-brand-soft px-2.5 py-1 text-[0.625rem] font-medium text-brand">
                  Open
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
