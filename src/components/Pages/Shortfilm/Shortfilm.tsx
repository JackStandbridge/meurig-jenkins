import type { Language } from "@/types/language";

import styles from "./shortfilm.module.scss";
import { Page } from "@/components/Page";
import { Content } from "@/components/Content";
import { Carousel } from "@/components/Carousel";

import { content } from "@/content/shortfilms";
import { Video } from "@/components/Video";
import { PDF } from "@/components/PDF";

export type ShortfilmProps = {
  language: Language;
  id: string;
};

export const Shortfilm = ({ language, id }: ShortfilmProps): JSX.Element => {
  const shortfilm = content.shortfilms[id];
  const { images } = shortfilm;
  const messages = shortfilm.messages[language];

  const { videoId, pdfs } = content.shortfilms[id];

  let feature: "" | "video" | "images" = "";

  if (videoId) {
    feature = "video";
  } else if (images && images.length) {
    feature = "images";
  }

  const renderImages = (): JSX.Element | null =>
    !images || images.length ? null : (
      <Carousel>
        {images.map(({ src, messages }, i) => (
          <Carousel.Slide src={src} alt={messages[language].alt} key={i} />
        ))}
      </Carousel>
    );

  const renderVideo = (): React.ReactNode =>
    !videoId ? null : <Video title={messages.title} videoId={videoId} />;

  const renderPdfs = (): React.ReactNode =>
    pdfs &&
    pdfs.length && (
      <div className={styles.pdfs}>
        {pdfs.map((pdf, i) => (
          <PDF filePath={pdf} key={i} />
        ))}
      </div>
    );

  const renderFeature = (): JSX.Element => (
    <>
      {feature === "video" && renderVideo()}
      {feature === "images" && renderImages()}
    </>
  );

  const renderExtraContent = (): JSX.Element => (
    <>
      {feature !== "video" && renderVideo()}
      {feature !== "images" && renderImages()}
      {renderPdfs()}
    </>
  );

  return (
    <Page description="Short Films by Meurig Jenkins" pageName="Short Films">
      <h1 className={styles.title}>{messages.title}</h1>

      {renderFeature()}

      <Content>{messages.description}</Content>

      {renderExtraContent()}
    </Page>
  );
};
