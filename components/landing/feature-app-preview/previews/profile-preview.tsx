import { AppAvatar } from "../app-avatar";
import { AppShell } from "../app-shell";
import { SectionLabel } from "../section-label";
import { navTabByFeature, profileData } from "../preview-data";

export function ProfilePreview() {
  return (
    <AppShell activeTab={navTabByFeature.profiles} showBottomNav>
      <div className="flex flex-1 flex-col items-center overflow-hidden px-4 py-5">
        <AppAvatar initials="SA" size="lg" />
        <p className="mt-3 text-[0.8125rem] font-semibold text-text-primary">
          {profileData.name}
        </p>
        <p className="mt-0.5 text-[0.625rem] text-text-tertiary">
          @{profileData.username}
        </p>
        <p className="mt-2 max-w-[16rem] text-center text-[0.6875rem] leading-snug text-text-secondary">
          {profileData.bio}
        </p>

        <div className="mt-4 flex items-center gap-6">
          <div className="text-center">
            <p className="text-[0.75rem] font-semibold text-text-primary">
              {profileData.followers}
            </p>
            <p className="text-[0.625rem] text-text-tertiary">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-[0.75rem] font-semibold text-text-primary">
              {profileData.following}
            </p>
            <p className="text-[0.625rem] text-text-tertiary">Following</p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 rounded-pill bg-brand px-5 py-1.5 text-[0.6875rem] font-medium text-white"
          tabIndex={-1}
        >
          Follow
        </button>

        <div className="mt-5 w-full">
          <SectionLabel>Recent rooms</SectionLabel>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {profileData.recentRooms.map((room) => (
              <span
                key={room}
                className="rounded-pill bg-surface-raised px-2.5 py-1 text-[0.625rem] text-text-secondary"
              >
                {room}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
