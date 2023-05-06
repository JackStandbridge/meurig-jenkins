import type { Language } from "@/types/language";

import Image from "next/image";

import { Page } from "@/components/Page";
import { content } from "@/content/about";
import { Content } from "@/components/Content";
import styles from "./about.module.scss";

export type AboutProps = {
  language: Language;
};

export const About = ({ language }: AboutProps): JSX.Element => {
  return (
    <Page description="About Meurig Jenkins" pageName="About">
      <h1 className={styles.title}>{content[language].title}</h1>

      <div className={styles.layout}>
        <picture className={styles.picture1}>
          <Image
            src={"/images/profile2.jpeg"}
            alt="Meurig Jenkins"
            width={450}
            height={675}
            className={styles.image}
          />
        </picture>
        <picture className={styles.picture2}>
          <Image
            src={"/images/profile1.jpeg"}
            alt="Meurig Jenkins"
            width={506}
            height={675}
            className={styles.image}
          />
        </picture>

        <div className={styles.text}>
          <Content>{content[language].blurb}</Content>
        </div>
      </div>
    </Page>
  );
};
