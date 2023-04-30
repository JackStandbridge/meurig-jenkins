import type { Language } from "@/types/language";

import { languages } from "@/types/language";

export const isLanguage = (val: string): val is Language =>
  languages.includes(val as Language);
