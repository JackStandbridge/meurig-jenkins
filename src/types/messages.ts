import { Language } from "./language";

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

export type LanguageSwitcher = Messages<{
  prompt: string;
}>;

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

export type Project = {
  id: string;
  type: "personal" | "commercial";
  videoId: string;
  poster: string;
  messages: Messages<{ title: string; description: string }>;
};

export type ProjectList = Record<string, Project>;

export type ProjectsPage = Messages<{
  title: string;
}> & { projects: ProjectList };

export type Shortfilm = {
  id: string;
  videoId: string;
  poster: string;
  messages: Messages<{ title: string; description: string }>;
};

export type ShortfilmList = Record<string, Shortfilm>;

export type ShortfilmsPage = Messages<{ title: string }> & {
  shortfilms: ShortfilmList;
};
