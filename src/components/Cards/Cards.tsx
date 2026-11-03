import type { Language } from "@/types/language";
import type { Card } from "@/types/content";

import Image from "next/image";
import Link from "next/link";
import styles from "./cards.module.scss";

export type CardsProps = {
  cards: Card[];
  headingLevel: 2 | 3;
  language: Language;
};

export const Cards = ({
  cards,
  headingLevel,
  language,
}: CardsProps): JSX.Element => {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className={styles.grid}>
      {cards.map(({ path, title, poster }) => {
        const image = poster[language];

        return (
          <Link className={styles.link} key={path} href={path}>
            <article>
              {!image ? null : (
                <picture className={styles.picture}>
                  <Image
                    className={styles.poster}
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                  />
                </picture>
              )}
              <Heading>{title[language]}</Heading>
            </article>
          </Link>
        );
      })}
    </div>
  );
};
