import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { CONTACT_INFO, CONTACT_ITEMS } from "@/config/contact";
import { cn } from "@/lib/utils";

const icons = {
  address: MapPin,
  phone: Phone,
  email: Mail,
} as const;

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <p className="text-h3 text-text-primary">Contact information</p>

      <ul className="space-y-7">
        {CONTACT_ITEMS.map((item) => {
          const Icon = icons[item.type];

          return (
            <li key={item.step} className="flex gap-4">
              <span className="text-caption font-semibold tabular-nums tracking-[0.12em] text-brand-decorative">
                {item.step}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Icon
                    className="size-4 shrink-0 text-brand"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="text-small font-medium text-text-secondary">
                    {item.label}
                  </p>
                </div>
                <a
                  href={item.href}
                  className={cn(
                    "mt-1.5 inline-block text-body text-text-primary transition-colors duration-200 hover:text-brand",
                    item.type === "address" && "hover:underline"
                  )}
                  {...(item.type === "address"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.value}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ContactMap() {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface-muted/30">
        <iframe
          title="W Live location on Google Maps"
          src={CONTACT_INFO.mapsEmbedUrl}
          className="aspect-[16/10] w-full max-h-[16rem] border-0 sm:max-h-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={CONTACT_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-small text-text-secondary transition-colors duration-200 hover:text-brand"
      >
        Open in Maps
        <ExternalLink className="size-3.5" strokeWidth={1.5} aria-hidden />
      </a>
    </div>
  );
}
