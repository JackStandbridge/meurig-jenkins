import { Messages } from "@/types/messages";

export type Hero = {
  title: {
    firstLine: string;
    secondLine: string;
  };
  subtitle: string;
};

export const messages: Messages<Hero> = {
  Welsh: {
    title: {
      firstLine: "Meurig Jenkins",
      secondLine: "ydw i",
    },
    subtitle: "Gwneuthurwr Ffilm Llawrydd",
  },
  English: {
    title: {
      firstLine: "I am",
      secondLine: "Meurig Jenkins",
    },
    subtitle: "Freelance Filmmaker",
  },
};
