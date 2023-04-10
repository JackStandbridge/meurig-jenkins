import { Language } from "@/types/language";
import { ProjectList } from "@/types/messages";
import Image from "next/image";
import Link from "next/link";
import styles from "./cards.module.scss";

export type CardsProps = {
  items: ProjectList;
  language: Language;
};

export const Cards = ({ items, language }: CardsProps): JSX.Element => (
  <section className={styles.grid}>
    {Object.values(items).map(({ messages, poster, id }, i) => (
      <Link className={styles.link} key={i} href={`/projects/${id}`}>
        <article>
          <picture className={styles.picture}>
            <Image
              className={styles.poster}
              src={poster}
              alt={messages[language].title}
              width={600}
              height={337}
            />
          </picture>
          <h2>{messages[language].title}</h2>
        </article>
      </Link>
    ))}
  </section>
);
