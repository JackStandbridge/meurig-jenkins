import type { Language } from "./language";

export type Translated<T> = Record<Language, T>;

export type ImageFile = {
  src: string;
  width: number;
  height: number;
};

export type Picture = ImageFile & {
  description: string;
};

export type HomeText = {
  menu: string;
  topLine: string;
  bottomLine: string;
  subtitle: string;
  backgroundVideo: string | null;
};

export type PageText = {
  menu: string;
  title: string;
  body: string;
  video: string | null;
  poster: ImageFile | null;
  banner: Picture | null;
  photos: Picture[];
  images: Picture[];
  pdfs: string[];
};

export type Link = {
  path: string;
  label: Translated<string>;
};

export type MenuItem = Link & {
  children: Link[];
};

export type Card = {
  path: string;
  title: Translated<string>;
  poster: Translated<ImageFile | null>;
};

export type CardGroup = {
  heading: Card | null;
  cards: Card[];
};

export type HomePage = {
  layout: "home";
  path: string;
  text: Translated<HomeText>;
};

export type StandardPage = {
  layout: "standard";
  path: string;
  topLevel: boolean;
  text: Translated<PageText>;
  groups: CardGroup[];
};

export type PageData = HomePage | StandardPage;

export const siteTextKeys = [
  "chooseLanguage",
  "showSubmenu",
  "previousSlide",
  "nextSlide",
  "previousPage",
  "nextPage",
  "youtube",
  "twitter",
  "instagram",
  "email",
] as const;

export type SiteText = Record<(typeof siteTextKeys)[number], string>;

export const siteLinkKeys = [
  "youtube",
  "twitter",
  "instagram",
  "email",
] as const;

export type SiteLinks = Partial<Record<(typeof siteLinkKeys)[number], string>>;

export type Site = {
  menu: MenuItem[];
  links: SiteLinks;
  text: Translated<SiteText>;
};
