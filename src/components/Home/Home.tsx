import { Language } from "@/types/language";
import Head from "next/head";
import { Header } from "../Header";
import { messages } from "./messages";
import styles from "./home.module.css";
import { Fragment } from "react";

export type HomeProps = {
  language: Language;
};

export const Home = ({ language }: HomeProps) => (
  <>
    <Head>
      <title>Meurig Jenkins</title>
      <meta name="description" content="A portfolio site for Meurig Jenkins" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
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
      </section>
    </main>
  </>
);
