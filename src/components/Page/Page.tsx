import type { ReactNode } from "react";

import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./page.module.scss";

export type PageProps = {
  children: ReactNode;
  pageName?: string;
  description: string;
};

export const Page = ({
  children,
  pageName,
  description,
}: PageProps): JSX.Element => (
  <>
    <Head>
      <title>{pageName ? pageName + " | " : ""}Meurig Jenkins</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <a className={styles.contentLink} href="#content">
        Skip to content
      </a>

      <Header />

      <main id="content">{children}</main>

      <hr className={styles.divider} />

      <Footer />
    </div>
  </>
);
