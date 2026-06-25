/**
 * site.ts — the business (singleton SITE).
 *
 * EDIT HERE to rebrand. `trade` and `region` are interpolated into titles,
 * descriptions, headings, and schema across the whole site — set them carefully.
 *
 * NOTE: This is a placeholder identity. Swap company / phone / email / url for the
 * real business before launch (see SPEC §11 rebrand checklist).
 */
export interface SiteConfig {
  company: string;
  tagline: string;
  /** What the business does, lowercase, for prose: "brake repair" */
  trade: string;
  phone: string; // dialable, E.164
  phoneDisplay: string; // shown to visitors
  email: string;
  /** Service-area region name shown in headlines, e.g. "San Antonio" */
  region: string;
  /** Production URL — keep in sync with `site` in astro.config.mjs (or set SITE_URL). */
  url: string;
  /** External form handler (Formspree/Web3Forms/Worker). "" → call-only mode (submit disabled). */
  formEndpoint: string;
  /** Web3Forms access key, if using Web3Forms (otherwise leave ""). */
  formAccessKey: string;
  /** Unused by default — service-area renders two keyless Google embeds. */
  mapEmbedSrc: string;
  priceRange: string; // e.g. "$$"  → schema
  /** AggregateRating — leave "" until there are real, verifiable reviews (fake ratings are a scammy signal and break schema). */
  ratingValue: string;
  reviewCount: string;
}

export const SITE: SiteConfig = {
  company: 'Hendersonville Generator Pros', // PLACEHOLDER name — swap for the real business
  tagline: 'Standby Generator Installation & Service',
  trade: 'generator installation and service',
  phone: '+18285550172', // PLACEHOLDER — 828 = Hendersonville / Henderson County (WNC)
  phoneDisplay: '(828) 555-0172', // PLACEHOLDER — confirm the real number
  email: 'service@hendersonvillegenerators.com', // PLACEHOLDER local-part — confirm the real inbox
  region: 'Henderson County',
  url: 'https://hendersonvillegenerators.com', // PLACEHOLDER domain — keep in sync with astro.config.mjs
  // Call-only for now: empty endpoint disables form submission and shows an on-page
  // "we'll call you back" acknowledgement without sending anything. Wire a backend later
  // (Web3Forms endpoint+key, Formspree endpoint, or a Worker URL) — see SPEC §8.
  formEndpoint: '',
  formAccessKey: '',
  mapEmbedSrc: '',
  priceRange: '$$',
  // No reviews wired up yet. Leave blank until real, verifiable reviews exist.
  ratingValue: '',
  reviewCount: '',
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;
