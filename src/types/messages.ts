import { Language } from "./language";

type Messages<T> = Record<Language, T>;

export type Nav = Messages<{
  home: string;
  about: string;
  projects: string;
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
}>;

export type AboutPage = Messages<{
  title: string;
  blurb: string;
}>;

export type Project = {
  id: string;
  videoId: string;
  poster: string;
  messages: Messages<{ title: string; description: string }>;
};

export type Projects = Record<string, Project>;

export type ProjectsPage = Messages<{
  title: string;
}> & { projects: Projects };
