import { Language } from "@/types/language";
import Head from "next/head";
import { Header } from "../Header";
import { messages } from "./messages";
import styles from "./projects.module.css";

export type ProjectsProps = {
  language: Language;
};

export const Projects = ({ language }: ProjectsProps) => (
  <>
    <Head>
      <title>Projects | Meurig Jenkins</title>
      <meta name="description" content="Projects by Meurig Jenkins" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="container">
      <h1 className={styles.title}>{messages[language].title}</h1>

      <h2>{messages[language].project1}</h2>
      <iframe
        className={styles.iframe}
        src="https://www.youtube.com/embed/lfQwtzRUTaU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  </>
);
