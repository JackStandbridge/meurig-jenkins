import type { Site } from "@/types/content";

import { createContext, useContext } from "react";

export const SiteContext = createContext<Site | null>(null);

export const useSite = (): Site => {
  const site = useContext(SiteContext);

  if (!site) {
    throw new Error("The site content hasn't been loaded");
  }

  return site;
};
