import { Language } from "@/types/language";
import Link from "next/link";
import { content } from "@/content/site";
import styles from "./nav.module.scss";

export type NavProps = {
  language: Language;
};

export const Nav = ({ language }: NavProps): JSX.Element => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li className={styles.li}>
        <Link className={styles.link} href="/">
          {content.nav[language].home}
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href="/about">
          {content.nav[language].about}
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href="/projects">
          {content.nav[language].projects}
        </Link>
      </li>
    </ul>
  </nav>
);
