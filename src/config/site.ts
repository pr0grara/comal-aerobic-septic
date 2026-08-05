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
  /** What the business does, lowercase, for prose: "aerobic septic service" */
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
  /** Only emit AggregateRating schema when real, verifiable reviews exist. */
  ratingsAreReal: boolean;
}

export const SITE: SiteConfig = {
  company: 'Hill Country Aerobic Septic', // brand matches domain hillcountryaerobicseptic.com
  tagline: 'Aerobic Septic Installation, Repair & Maintenance',
  trade: 'aerobic septic service',
  phone: '+18305550147', // PLACEHOLDER — Comal County / New Braunfels (830). Use the real number before launch.
  phoneDisplay: '(830) 555-0147', // PLACEHOLDER
  email: 'service@hillcountryaerobicseptic.com', // confirm the real inbox exists
  region: 'Comal County', // Texas Hill Country
  url: 'https://hillcountryaerobicseptic.com', // live domain — keep in sync with astro.config.mjs
  // Call-only for now: empty endpoint disables form submission and shows an on-page
  // "we'll call you back" acknowledgement without sending anything. Wire a backend later
  // (Web3Forms endpoint+key, Formspree endpoint, or a Worker URL) — see SPEC §8.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'e3cc242b-9bf1-4322-af8a-6f64a8e780ac',
  mapEmbedSrc: '',
  priceRange: '$$',
  // No reviews wired up yet. Leave blank until real, verifiable reviews exist.
  ratingValue: '',
  reviewCount: '',
  ratingsAreReal: false,
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;
