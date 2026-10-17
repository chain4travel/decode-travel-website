import type { ImageMetadata } from 'astro';

// Content model shared by all edition recap pages.

export interface Link {
  label: string;
  url: string;
}

/** A paragraph of text, optionally in another language. */
export interface SourcedText {
  text: string;
  lang?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AgendaDay {
  day: string;
  date: string;
  title: string;
  items: { time?: string; text: string }[];
}

/** A paragraph, or a bullet list when it is an array. */
export type Block = string | string[];

export interface Challenge {
  sponsor?: string;
  logo?: ImageMetadata;
  /** Short theme as shown on the published site (e.g. "Payment"). */
  theme?: string;
  title?: string;
  summary?: string[];
  body?: Block[];
  /** Team that took up the challenge, shown small. */
  takenBy?: string;
}

export interface JuryMember {
  name: string;
  role?: string;
}

export interface Award {
  award: string;
  /** Team name, only when published. */
  team?: string;
  company?: string;
  challenge?: string;
  description?: SourcedText;
  repos?: Link[];
  video?: Link;
}

export interface Team {
  team: string;
  company?: string;
  challenge?: string;
  description?: SourcedText;
  repos?: Link[];
  video?: Link;
}

export interface Quote {
  text: string;
  author: string;
  role: string;
  lang?: string;
  /** Shown under the quote, e.g. "Translated from German". */
  note?: string;
}

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

export interface PartnerGroup {
  group: string;
  items: { name: string; logo?: ImageMetadata; url?: string; logoClass?: string; withName?: boolean }[];
}

export interface PressLink {
  kind: string;
  title: string;
  excerpt?: string;
  url: string;
  image?: ImageMetadata;
}

export interface Edition {
  slug: string;
  number: number;
  name: string;
  city: string;
  country: string;
  flag: string;
  dates: string;
  year: number;
  venue: string;
  /** Hero title as published for the edition. */
  heroTitle: string;
  /** The single past-tense line telling the edition is over. */
  headline: string;
  intro: SourcedText[];
  /** Place line of the home card, as published on the home page hero cards. */
  cardPlace: string;
  cardImage: ImageMetadata;
  heroImage: ImageMetadata;
  cardStats: string[];
  stats: Stat[];
  agenda?: AgendaDay[];
  agendaTitle?: string;
  challengesTitle?: string;
  challengesIntro?: SourcedText;
  /** Other challenges presented but not picked by any team (short form). */
  challengesOther?: { title: string; summary: string }[];
  challenges: Challenge[];
  jury: JuryMember[];
  juryNote?: SourcedText;
  awardsIntro?: string;
  awards: Award[];
  teamsTitle?: string;
  teams: Team[];
  quotes: Quote[];
  gallery: GalleryImage[];
  partnersTitle?: string;
  partners: PartnerGroup[];
  links: PressLink[];
}
