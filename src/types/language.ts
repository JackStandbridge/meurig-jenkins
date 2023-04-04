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
    flagUrl: "/wales.png",
  },

  English: {
    name: "English",
    // flagUrl: "/uk.png",
    flagUrl: "/england.png",
  },
};

export const languages = Object.keys(
  languageInfo
) as (keyof typeof languageInfo)[];
