import { Language } from "@/types/language";
import { Fragment } from "react";
import styles from "./hero.module.scss";
import { messages } from "./messages";

export type HeroProps = {
  language: Language;
};

export const Hero = ({ language }: HeroProps): JSX.Element => (
  <section className={styles.hero}>
    <h1 className={styles.title}>
      {messages[language].title.firstLine.split(" ").map((word, i) => (
        <Fragment key={i}>
          <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
            {word[0]}
          </span>

          <span>{word.slice(1)} </span>
        </Fragment>
      ))}

      <hr className={styles.hr} />

      {messages[language].title.secondLine.split(" ").map((word, i) => (
        <Fragment key={i}>
          <span className={/[A-Z]/.test(word[0]) ? styles.firstLetter : ""}>
            {word[0]}
          </span>

          <span>{word.slice(1)} </span>
        </Fragment>
      ))}
    </h1>

    <p className={styles.subtitle}>{messages[language].subtitle}</p>
  </section>
);
