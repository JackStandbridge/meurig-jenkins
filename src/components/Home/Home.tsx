import Head from "next/head";
import { Header } from "../Header";
import { Hero } from "../Hero";
import styles from "./home.module.css";

export const Home = () => (
  <>
    <Head>
      <title>Meurig Jenkins</title>
      <meta name="description" content="A portfolio site for Meurig Jenkins" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className={"container " + styles.container}>
      <Hero />
    </main>
  </>
);
