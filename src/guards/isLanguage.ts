import { Language } from "@/types/language";

export const isLanguage = (val: string): val is Language => val in Language;
