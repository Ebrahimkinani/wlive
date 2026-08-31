export const CONTACT_INFO = {
  address: "DOHA Qatar",
  phone: "+974 30543054",
  whatsappUrl: "https://wa.me/97430543054",
  email: "INFO@WLIVE.com",
  /** Supplied short link — used for “Open in Maps”. */
  mapsUrl: "https://maps.app.goo.gl/8ikAoR5MqhqAeGHp8",
  /**
   * Embed URL derived from the supplied mapsUrl redirect
   * (25.395644, 51.422445 — Doha, Qatar).
   */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=25.395644,51.422445&hl=en&z=15&output=embed",
} as const;

export const CONTACT_SECTION = {
  eyebrow: "Contact",
  headingLine1: "Contact us to answer",
  headingLine2: "your inquiries",
} as const;

export const CONTACT_ITEMS = [
  {
    step: "01",
    label: "Address",
    value: CONTACT_INFO.address,
    href: CONTACT_INFO.mapsUrl,
    type: "address" as const,
  },
  {
    step: "02",
    label: "Call Us",
    secondaryLabel: "WhatsApp",
    value: CONTACT_INFO.phone,
    href: CONTACT_INFO.whatsappUrl,
    type: "phone" as const,
  },
  {
    step: "03",
    label: "Email Us",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    type: "email" as const,
  },
];
