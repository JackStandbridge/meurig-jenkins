import Head from "next/head";

import { Language } from "@/types/language";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";

import styles from "./project.module.css";

export type ProjectProps = {
  language: Language;
  id: string;
};

export const Project = ({ language, id }: ProjectProps): JSX.Element => {
  const messages = projects[id].messages[language];

  return (
    <>
      <Head>
        <title>Projects | Meurig Jenkins</title>
        <meta name="description" content="Projects by Meurig Jenkins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container">
        <h1>{messages.title}</h1>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${projects[id].videoId}`}
          title={messages.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {messages.description
          .trim()
          .split(/\n\n/)
          .map((paragraph, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(/\n/g, "<br />"),
              }}
            />
          ))}
      </main>
    </>
  );
};
