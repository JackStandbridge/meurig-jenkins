import type { Nav, LanguageSwitcher } from "@/types/messages";

export const content: { nav: Nav; languageSwitcher: LanguageSwitcher } = {
  nav: {
    Welsh: {
      home: "hafan",
      about: "amdanaf i",
      projects: "prosiectau",
    },
    English: {
      home: "home",
      about: "about",
      projects: "projects",
    },
  },
  languageSwitcher: {
    Welsh: {
      prompt: "Dewiswch Iaith",
    },
    English: {
      prompt: "Choose Language",
    },
  },
};
