export type CurrencyVisual = "w-currency" | "gold" | "crystal";

export type CurrencyItem = {
  id: string;
  label: string;
  title: string;
  /** Optional supporting lines (non-package content). */
  details?: string[];
  packages: string[];
  contact: string;
  contactLabel: string;
  featured?: boolean;
  /** Public path when a currency visual is ready (e.g. "/images/currency/gold.webp"). */
  image: string | null;
  visual: CurrencyVisual;
};

export const CURRENCIES: CurrencyItem[] = [
  {
    id: "w-currency",
    label: "W CURRENCY",
    title:
      "W Currency is the in-app digital currency used across the W Live experience.",
    details: [
      "Used for purchases and wallet interactions",
      "Designed as a core digital balance inside the platform",
    ],
    packages: [],
    contact: "+974 30543054",
    contactLabel: "WhatsApp",
    featured: true,
    image: "/currencies/w-currency.png",
    visual: "w-currency",
  },
  {
    id: "gold",
    label: "W LIVE GOLD",
    title: "W Live Gold can be obtained in different packages.",
    packages: [
      "100K / 1499 QR",
      "200K / 2999 QR",
      "400K / 5999 QR",
      "500K / 7499 QR vip",
      "1M / 13999 QR VVIP",
    ],
    contact: "+974 30543054",
    contactLabel: "WhatsApp",
    featured: false,
    image: "/currencies/gd.png",
    visual: "gold",
  },
  {
    id: "crystal",
    label: "CRYSTAL W LIVE",
    title: "Exclusively for VIP and VVIP accounts.",
    packages: [],
    contact: "+974 30543054",
    contactLabel: "WhatsApp",
    featured: false,
    image: "/currencies/di.png",
    visual: "crystal",
  },
];

export const CURRENCY_SECTION = {
  eyebrow: "Our currency",
  supporting: "We are distinguished by our own digital currency.",
};
