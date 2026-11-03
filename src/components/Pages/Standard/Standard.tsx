import type { CSSProperties } from "react";
import type { Language } from "@/types/language";
import type { Picture, StandardPage } from "@/types/content";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Page } from "@/components/Page";
import { Content } from "@/components/Content";
import { Carousel } from "@/components/Carousel";
import { Cards } from "@/components/Cards";
import { Video } from "@/components/Video";

import styles from "./standard.module.scss";

const PDF = dynamic(() =>
  import("@/components/PDF").then((module) => module.PDF)
);

export type StandardProps = {
  language: Language;
  page: StandardPage;
};

const summarise = (body: string, fallback: string): string => {
  const firstParagraph = body
    .split(/\n\s*\n/)
    .map((paragraph) =>
      paragraph
        .replace(/<[^>]+>/g, "")
        .replace(/[#*_>`]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    )
    .find((paragraph) => paragraph.length);

  if (!firstParagraph) {
    return fallback;
  }

  return firstParagraph.length > 160
    ? `${firstParagraph.slice(0, 157)}...`
    : firstParagraph;
};

const Banner = ({ picture }: { picture: Picture }): JSX.Element => (
  <div className={styles.bannerContainer}>
    <Image
      className={styles.banner}
      src={picture.src}
      alt={picture.description}
      width={picture.width}
      height={picture.height}
    />
  </div>
);

const Photos = ({ photos }: { photos: Picture[] }): JSX.Element => (
  <div
    className={styles.photos}
    style={
      {
        "--columns": photos
          .map(({ width, height }) => `${width / height}fr`)
          .join(" "),
      } as CSSProperties
    }
  >
    {photos.map((photo, i) => (
      <Image
        key={i}
        src={photo.src}
        alt={photo.description}
        width={photo.width}
        height={photo.height}
        className={styles.photo}
      />
    ))}
  </div>
);

export const Standard = ({ language, page }: StandardProps): JSX.Element => {
  const { title, body, video, banner, photos, images, pdfs } =
    page.text[language];

  const carousel = !images.length ? null : (
    <Carousel>
      {images.map(({ src, description }, i) => (
        <Carousel.Slide src={src} alt={description} key={i} />
      ))}
    </Carousel>
  );

  return (
    <Page pageName={title} description={summarise(body, title)}>
      {banner ? <Banner picture={banner} /> : null}

      <h1 className={page.topLevel ? styles.bigTitle : styles.title}>
        {title}
      </h1>

      {photos.length ? <Photos photos={photos} /> : null}

      {video ? <Video title={title} videoId={video} /> : carousel}

      {body ? <Content>{body}</Content> : null}

      {video ? carousel : null}

      {!pdfs.length ? null : (
        <div className={styles.pdfs}>
          {pdfs.map((pdf) => (
            <PDF filePath={pdf} key={pdf} />
          ))}
        </div>
      )}

      {page.groups.map(({ heading, cards }, i) => (
        <section className={styles.group} key={heading?.path ?? i}>
          {!heading ? null : (
            <h2>
              <Link href={heading.path}>{heading.title[language]}</Link>
            </h2>
          )}

          <Cards cards={cards} headingLevel={heading ? 3 : 2} />
        </section>
      ))}
    </Page>
  );
};
