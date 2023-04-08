import { Language } from "@/types/language";
import { Cards } from "@/components/Cards";
import styles from "./projects.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/projects";

export type ProjectsProps = {
  language: Language;
};

export const Projects = ({ language }: ProjectsProps) => (
  <Page description="Projects by Meurig Jenkins" pageName="Projects">
    <h1 className={styles.title}>{content[language].title}</h1>
    <Cards items={content.projects} />
  </Page>
);
