import type { Nav, LanguageSwitcher } from "@/types/messages";

export const content: { nav: Nav; languageSwitcher: LanguageSwitcher } = {
  nav: {
    Welsh: {
      home: "hafan",
      about: "amdanaf i",
      company: "Ffilmiau PenDraig",
      shortfilms: {
        name: "ffilmiau fer",
        items: {
          stanza: "The Stanza Principle",
          trosech: "Trosech",
          vultures: "Glass Vultures",
        },
      },
      projects: {
        name: "prosiectau",
        items: {
          personal: "personol",
          commercial: "masnachol",
        },
      },
    },
    English: {
      home: "home",
      about: "about",
      company: "PenDraig Films",
      shortfilms: {
        name: "short films",
        items: {
          stanza: "The Stanza Principle",
          trosech: "Trosech",
          vultures: "Glass Vultures",
        },
      },
      projects: {
        name: "projects",
        items: {
          personal: "personal",
          commercial: "commercial",
        },
      },
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
