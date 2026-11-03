import type { Language } from "@/types/language";
import type { HomeText, Translated } from "@/types/content";

import { Fragment } from "react";
import styles from "./hero.module.scss";

export type HeroProps = {
  language: Language;
  text: Translated<HomeText>;
};

export const Hero = ({ language, text }: HeroProps): JSX.Element => (
  <section className={styles.hero}>
    <div className={styles.videoWrapper}>
      {text[language].backgroundVideo ? (
        <video
          src={text[language].backgroundVideo ?? ""}
          autoPlay
          playsInline
          muted
          loop
          className={styles.video}
        />
      ) : null}
    </div>

    <div className={styles.content}>
      <h1 className={styles.title}>
        {text[language].topLine.split(" ").map((word, i) => (
          <Fragment key={i}>
            <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
              {word[0]}
            </span>

            <span>{word.slice(1)} </span>
          </Fragment>
        ))}

        <hr className={styles.hr} />

        {text[language].bottomLine.split(" ").map((word, i) => (
          <Fragment key={i}>
            <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
              {word[0]}
            </span>

            <span>{word.slice(1)} </span>
          </Fragment>
        ))}
      </h1>

      <p className={styles.subtitle}>{text[language].subtitle}</p>
    </div>
  </section>
);
