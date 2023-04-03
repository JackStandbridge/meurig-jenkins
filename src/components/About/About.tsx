import { Language } from "@/types/language";
import Head from "next/head";
import { Header } from "../Header";
import { messages } from "./messages";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps) => (
  <>
    <Head>
      <title>About | Meurig Jenkins</title>
      <meta name="description" content="A portfolio site for Meurig Jenkins" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <h1>{messages[language].title}</h1>
    </main>
  </>
);
