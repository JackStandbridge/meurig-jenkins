import { Messages } from "../../types/messages";

export type Home = {
  title: {
    firstLine: string;
    secondLine: string;
  };
};

export const messages: Messages<Home> = {
  Welsh: {
    title: {
      firstLine: "Meurig Jenkins",
      secondLine: "ydw i",
    },
  },
  English: {
    title: {
      firstLine: "I am",
      secondLine: "Meurig Jenkins",
    },
  },
};
