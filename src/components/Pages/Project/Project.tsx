import type { Language } from "@/types/language";

import { Page } from "@/components/Page";
import { Content } from "@/components/Content";
import { Carousel } from "@/components/Carousel";

import { content } from "@/content/projects";

import styles from "./project.module.scss";

export type ProjectProps = {
  language: Language;
  id: string;
};

export const Project = ({ language, id }: ProjectProps): JSX.Element => {
  const project = content.projects[id];
  const { images } = project;
  const messages = project.messages[language];

  return (
    <Page description="Projects by Meurig Jenkins" pageName="Projects">
      <h1 className={styles.title}>{messages.title}</h1>

      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${content.projects[id].videoId}`}
        title={messages.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <Content>{messages.description}</Content>

      {!images ? null : (
        <Carousel>
          {images.map(({ src, messages }, i) => (
            <Carousel.Slide src={src} alt={messages[language].alt} key={i} />
          ))}
        </Carousel>
      )}
    </Page>
  );
};
