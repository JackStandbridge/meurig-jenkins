import { Language } from "@/types/language";
import { content } from "@/content/projects";

import styles from "./project.module.scss";
import { Page } from "@/components/Page";

export type ProjectProps = {
  language: Language;
  id: string;
};

export const Project = ({ language, id }: ProjectProps): JSX.Element => {
  const messages = content.projects[id].messages[language];

  return (
    <Page description="Projects by Meurig Jenkins" pageName="Projects">
      <h1>{messages.title}</h1>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${content.projects[id].videoId}`}
        title={messages.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {messages.description
        .trim()
        .split(/\n\n/)
        .map((paragraph, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\n/g, "<br />"),
            }}
          />
        ))}
    </Page>
  );
};
