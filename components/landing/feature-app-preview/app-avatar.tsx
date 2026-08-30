import { cn } from "@/lib/utils";

type AppAvatarProps = {
  initials: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  ring?: boolean;
};

const sizeClasses = {
  sm: "size-6 text-[0.5625rem]",
  md: "size-8 text-[0.625rem]",
  lg: "size-14 text-sm",
};

export function AppAvatar({
  initials,
  size = "md",
  className,
  ring = false,
}: AppAvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-brand-soft font-medium text-brand",
        sizeClasses[size],
        ring && "ring-2 ring-card-elevated",
        className
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function AvatarStack({
  initials,
  max = 3,
}: {
  initials: string[];
  max?: number;
}) {
  const visible = initials.slice(0, max);

  return (
    <div className="flex -space-x-2">
      {visible.map((item, index) => (
        <AppAvatar
          key={`${item}-${index}`}
          initials={item}
          size="sm"
          ring
          className={index > 0 ? "opacity-90" : undefined}
        />
      ))}
    </div>
  );
}
