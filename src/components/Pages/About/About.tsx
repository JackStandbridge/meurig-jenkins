import { Language } from "@/types/language";
import styles from "./about.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/about";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps) => (
  <Page description="About Meurig Jenkins" pageName="About">
    <h1 className={styles.title}>{content[language].title}</h1>
    <p className={styles.blurb}>{content[language].blurb}</p>
  </Page>
);
