import { Language } from "@/types/language";
import { content } from "@/content/shortfilms";

import styles from "./shortfilm.module.scss";
import { Page } from "@/components/Page";
import { Content } from "@/components/Content";

export type ShortfilmProps = {
  language: Language;
  id: string;
};

export const Shortfilm = ({ language, id }: ShortfilmProps): JSX.Element => {
  const messages = content.shortfilms[id].messages[language];

  const { videoId } = content.shortfilms[id];

  return (
    <Page description="Short Films by Meurig Jenkins" pageName="Short Films">
      <h1>{messages.title}</h1>

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
    </Page>
  );
};
