import { Language } from "@/types/language";
import Link from "next/link";
import { messages } from "./messages";
import styles from "./nav.module.css";

export type NavProps = {
  language: Language;
};

export const Nav = ({ language }: NavProps): JSX.Element => (
  <nav>
    <ul className={styles.list}>
      <li>
        <Link className={styles.link} href="/">
          {messages[language].home}
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="about">
          {messages[language].about}
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="projects">
          {messages[language].projects}
        </Link>
      </li>
    </ul>
  </nav>
);
