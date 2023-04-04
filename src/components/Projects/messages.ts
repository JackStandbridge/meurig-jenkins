import { Messages } from "../../types/messages";

export type Projects = {
  title: string;
  project1: string;
};

export const messages: Messages<Projects> = {
  Welsh: {
    title: "Prosiectau",
    project1: "Hydeout Espresso Martini Advert",
  },
  English: {
    title: "Projects",
    project1: "Hydeout Espresso Martini Advert",
  },
};
