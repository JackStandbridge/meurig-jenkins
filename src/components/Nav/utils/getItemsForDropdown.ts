import type { Language } from "@/types/language";
import type { Item } from "../Dropdown";
import type { ValueOf } from "@/types/utils";

import { content } from "@/content/site";

export const getItemsForDropdown = (
  language: Language,
  name: "shortfilms" | "projects"
): Item[] => {
  return (
    Object.entries(content.nav[language][name].items) as [
      keyof (typeof content.nav)[Language][typeof name]["items"],
      ValueOf<(typeof content.nav)[Language][typeof name]["items"]>
    ][]
  ).map(
    ([route, item]): Item => ({
      href: `/${name}/${route}`,
      name: item,
    })
  );
};
