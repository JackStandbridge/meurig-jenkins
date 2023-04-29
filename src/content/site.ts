import type { Nav, LanguageSwitcher, Carousel } from "@/types/messages";

export const content: {
  nav: Nav;
  languageSwitcher: LanguageSwitcher;
  carousel: Carousel;
} = {
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
  carousel: {
    Welsh: {
      previousSlide: "Sleid blaenorol",
      nextSlide: "Sleid nesaf",
    },
    English: {
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
    },
  },
};
