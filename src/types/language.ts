export type Language = "Welsh" | "English";

export const languageInfo: Record<
  Language,
  {
    name: string;
    flagUrl: string;
  }
> = {
  Welsh: {
    name: "Cymraeg",
    flagUrl: "/icons/wales.png",
  },

  English: {
    name: "English",
    // flagUrl: "/icons/uk.png",
    flagUrl: "/icons/england.png",
  },
};

export const languages = Object.keys(
  languageInfo
) as (keyof typeof languageInfo)[];
