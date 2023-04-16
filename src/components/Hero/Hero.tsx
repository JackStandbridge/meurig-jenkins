import { Language } from "@/types/language";
import { Fragment } from "react";
import { content } from "@/content/home";
import styles from "./hero.module.scss";

export type HeroProps = {
  language: Language;
};

export const Hero = ({ language }: HeroProps): JSX.Element => (
  <section className={styles.hero}>
    <div className={styles.videoWrapper}>
      <video
        src="/videos/banner.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
      />
    </div>

    <div className={styles.content}>
      <h1 className={styles.title}>
        {content[language].title.firstLine.split(" ").map((word, i) => (
          <Fragment key={i}>
            <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
              {word[0]}
            </span>

            <span>{word.slice(1)} </span>
          </Fragment>
        ))}

        <hr className={styles.hr} />

        {content[language].title.secondLine.split(" ").map((word, i) => (
          <Fragment key={i}>
            <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
              {word[0]}
            </span>

            <span>{word.slice(1)} </span>
          </Fragment>
        ))}
      </h1>

      <p className={styles.subtitle}>{content[language].subtitle}</p>
    </div>
  </section>
);
