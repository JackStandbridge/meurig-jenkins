import type { Language } from "@/types/language";
import type { ProjectList, ShortfilmList } from "@/types/messages";

import { Cards } from "@/components/Cards";
import styles from "./projects.module.scss";
import { Page } from "@/components/Page";
import { content } from "@/content/projects";

export type ProjectsProps = {
  language: Language;
  projects: ProjectList | ShortfilmList;
};

export const Projects = ({
  language,
  projects,
}: ProjectsProps): JSX.Element => (
  <Page description="Projects by Meurig Jenkins" pageName="Projects">
    <h1 className={styles.title}>{content[language].title}</h1>
    <Cards items={projects} section="projects" />
  </Page>
);
