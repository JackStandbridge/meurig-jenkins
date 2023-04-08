import { Language } from "@/types/language";
import { messages } from "./messages";
import styles from "./about.module.scss";
import { Page } from "@/components/Page";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps) => (
  <Page description="About Meurig Jenkins" pageName="About">
    <h1 className={styles.title}>{messages[language].title}</h1>
    <p className={styles.blurb}>{messages[language].blurb}</p>
  </Page>
);
