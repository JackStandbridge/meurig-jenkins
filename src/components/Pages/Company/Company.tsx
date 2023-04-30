import type { Language } from "@/types/language";

import { Content } from "@/components/Content";
import { Page } from "@/components/Page";
import { content } from "@/content/company";
import Image from "next/image";
import styles from "./company.module.scss";

export type CompanyProps = {
  language: Language;
};

export const Company = ({ language }: CompanyProps): JSX.Element => {
  return (
    <Page description="Pendraig Films production company">
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={content.logo.src}
          alt={content.logo.messages[language].alt}
          width={900}
          height={506}
        />
      </div>

      <h1>{content.messages[language].title}</h1>

      <Content>{content.messages[language].blurb}</Content>
    </Page>
  );
};
