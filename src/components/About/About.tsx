import { Language } from "@/types/language";
import Head from "next/head";
import { Header } from "../Header";
import { messages } from "./messages";
import styles from "./about.module.css";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps) => (
  <>
    <Head>
      <title>About | Meurig Jenkins</title>
      <meta name="description" content="About Meurig Jenkins" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="container">
      <h1 className={styles.title}>{messages[language].title}</h1>
      <p className={styles.blurb}>{messages[language].blurb}</p>
    </main>
  </>
);
