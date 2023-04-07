import { Messages } from "../@/types/messages";

export type LanguageSwitcher = {
  prompt: string;
};

export const messages: Messages<LanguageSwitcher> = {
  Welsh: {
    prompt: "Dewiswch Iaith",
  },
  English: {
    prompt: "Choose Language",
  },
};
