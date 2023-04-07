import { Language } from "@/types/language";
import Head from "next/head";
import { Cards } from "../Cards";
import { Header } from "../Header";
import { messages } from "./messages";
import styles from "./projects.module.css";
import { projects } from "@/data/projects";

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

      <Cards items={projects} />
      {/* {messages[language].projects.map((project) => (
        <>
          <h2>{project.name}</h2>
          <Image
            src={project.poster}
            alt={project.name}
            width={600}
            height={337}
          />
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title={project.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </>
      ))} */}
    </main>
  </>
);
