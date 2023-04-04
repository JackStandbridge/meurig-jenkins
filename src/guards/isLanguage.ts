import { Language, languages } from "@/types/language";

export const isLanguage = (val: string): val is Language =>
  languages.includes(val as Language);
