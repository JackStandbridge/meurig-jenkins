import { Messages } from "../../types/messages";

export type Nav = {
  home: string;
  about: string;
  projects: string;
};

export const messages: Messages<Nav> = {
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
};
