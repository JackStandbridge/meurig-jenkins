import type { Language } from "@/types/language";
import type { ContentList } from "@/types/messages";

import Image from "next/image";
import Link from "next/link";
import styles from "./cards.module.scss";

export type CardsProps = {
  items: ContentList;
  language: Language;
  section: string;
};

export const Cards = ({
  items,
  language,
  section,
}: CardsProps): JSX.Element => (
  <section className={styles.grid}>
    {Object.values(items).map(({ messages, poster, id }, i) => (
      <Link className={styles.link} key={i} href={`/${section}/${id}`}>
        <article>
          {!poster ? null : (
            <picture className={styles.picture}>
              <Image
                className={styles.poster}
                src={poster}
                alt={messages[language].title}
                width={600}
                height={337}
              />
            </picture>
          )}
          <h2>{messages[language].title}</h2>
        </article>
      </Link>
    ))}
  </section>
);
