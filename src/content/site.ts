import type { Nav, LanguageSwitcher, Carousel, Footer } from "@/types/messages";

export const content: {
  nav: Nav;
  languageSwitcher: LanguageSwitcher;
  carousel: Carousel;
  footer: Footer;
} = {
  nav: {
    Welsh: {
      home: "hafan",
      acting: "actio",
      videography: "Fideosyddiaeth",
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
      acting: "acting",
      videography: "Videography",
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
  footer: {
    Welsh: {
      youtube: "Gweld fy nhudalen Youtube",
      twitter: "Gweld fy nhudalen Twitter",
      email: "E-bostiwch fi",
      instagram: "Gweld fy nhudalen Instagram",
    },
    English: {
      youtube: "View my Youtube page",
      twitter: "View my Twitter page",
      email: "Email me",
      instagram: "View my Instagram page",
    },
  },
};
