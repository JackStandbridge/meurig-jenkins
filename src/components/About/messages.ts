import { Messages } from "../../types/messages";

export type About = {
  title: string;
};

export const messages: Messages<About> = {
  Welsh: {
    title: "Amdanaf i",
  },
  English: {
    title: "About me",
  },
};
