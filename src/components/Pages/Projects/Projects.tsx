import { Language } from "@/types/language";
import { Cards } from "@/components/Cards";
import { messages } from "./messages";
import styles from "./projects.module.scss";
import { projects } from "@/data/projects";
import { Page } from "@/components/Page";

export type ProjectsProps = {
  language: Language;
};

export const Projects = ({ language }: ProjectsProps) => (
  <Page description="Projects by Meurig Jenkins" pageName="Projects">
    <h1 className={styles.title}>{messages[language].title}</h1>
    <Cards items={projects} />
  </Page>
);
