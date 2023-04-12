import { Language } from "@/types/language";
import styles from "./about.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/about";
import { Content } from "@/components/Content";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps) => (
  <Page description="About Meurig Jenkins" pageName="About">
    <h1 className={styles.title}>{content[language].title}</h1>
    <Content>{content[language].blurb}</Content>
  </Page>
);
