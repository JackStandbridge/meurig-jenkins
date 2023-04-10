import { Language } from "@/types/language";
import { Cards } from "@/components/Cards";
import styles from "./projects.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/projects";
import { ProjectList } from "@/types/messages";

export type ProjectsProps = {
  language: Language;
  projects: ProjectList;
};

export const Projects = ({ language, projects }: ProjectsProps) => (
  <Page description="Projects by Meurig Jenkins" pageName="Projects">
    <h1 className={styles.title}>{content[language].title}</h1>
    <Cards items={projects} />
  </Page>
);
