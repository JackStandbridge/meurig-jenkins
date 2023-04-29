import { Language } from "@/types/language";
import { content } from "@/content/shortfilms";

import styles from "./shortfilm.module.scss";
import { Page } from "@/components/Page";
import { Content } from "@/components/Content";
import { Carousel } from "@/components/Carousel";

export type ShortfilmProps = {
  language: Language;
  id: string;
};

export const Shortfilm = ({ language, id }: ShortfilmProps): JSX.Element => {
  const shortfilm = content.shortfilms[id];
  const { images } = shortfilm;
  const messages = shortfilm.messages[language];

  const { videoId } = content.shortfilms[id];

  return (
    <Page description="Short Films by Meurig Jenkins" pageName="Short Films">
      <h1 className={styles.title}>{messages.title}</h1>

      {!videoId ? null : (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={messages.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}

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
