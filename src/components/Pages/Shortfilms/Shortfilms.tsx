import type { Language } from "@/types/language";
import type { ShortfilmList } from "@/types/messages";

import { Cards } from "@/components/Cards";
import styles from "./shortfilms.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/shortfilms";

export type ShortfilmsProps = {
  language: Language;
  projects: ShortfilmList;
};

export const Shortfilms = ({
  language,
  projects,
}: ShortfilmsProps): JSX.Element => (
  <Page description="Short Films by Meurig Jenkins" pageName="Short Films">
    <h1 className={styles.title}>{content[language].title}</h1>
    <Cards items={projects} section="shortfilms" />
  </Page>
);
