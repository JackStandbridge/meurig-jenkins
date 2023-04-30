import type { Language } from "./language";

type Messages<T> = Record<Language, T>;

export type Nav = Messages<{
  home: string;
  about: string;
  company: string;
  shortfilms: {
    name: string;
    items: { stanza: string; trosech: string; vultures: string };
  };
  projects: {
    name: string;
    items: {
      personal: string;
      commercial: string;
    };
  };
}>;

export type Footer = Messages<{
  youtube: string;
  twitter: string;
  email: string;
}>;

export type LanguageSwitcher = Messages<{
  prompt: string;
}>;

export type Image = { src: string; messages: Messages<{ alt: string }> };

export type Carousel = Messages<{ previousSlide: string; nextSlide: string }>;

export type HomePage = Messages<{
  title: {
    firstLine: string;
    secondLine: string;
  };
  subtitle: string;
}> & { videoBannerId: string };

export type AboutPage = Messages<{
  title: string;
  blurb: string;
}>;

export type CompanyPage = {
  logo: Image;
  messages: Messages<{
    title: string;
    blurb: string;
  }>;
};

export type ContentPage = {
  id: string;
  videoId?: string;
  poster: string;
  images?: Image[];
  messages: Messages<{ title: string; description: string }>;
};

export type ContentList = Record<string, ContentPage>;

export type Project = ContentPage & {
  type: "personal" | "commercial";
};

export type ProjectList = Record<string, Project>;

export type ProjectsPage = Messages<{
  title: string;
}> & { projects: ProjectList };

export type Shortfilm = ContentPage;

export type ShortfilmList = Record<string, Shortfilm>;

export type ShortfilmsPage = Messages<{ title: string }> & {
  shortfilms: ShortfilmList;
};
