import type { Language } from "@/types/language";

import { Page } from "@/components/Page";
import { content } from "@/content/about";
import { Content } from "@/components/Content";
import styles from "./about.module.scss";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps): JSX.Element => {
  return (
    <Page description="About Meurig Jenkins" pageName="About">
      <h1 className={styles.title}>{content[language].title}</h1>

      <Content>{content[language].blurb}</Content>
    </Page>
  );
};
