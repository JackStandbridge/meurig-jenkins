import type { Language } from "@/types/language";

import { YoutubeIcon } from "./YoutubeIcon";
import { EmailIcon } from "./EmailIcon";
import { TwitterIcon } from "./TwitterIcon";
import { InstagramIcon } from "./InstagramIcon";

import styles from "./footer.module.scss";
import { content } from "@/content/site";

export type FooterProps = {
  language: Language;
};

export const Footer = ({ language }: FooterProps): JSX.Element => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a
            className={styles.link}
            href="https://www.youtube.com/@ffilmiaupendraigfilms6144"
          >
            <span className="screenReader">
              {content.footer[language].youtube}
            </span>

            <YoutubeIcon />
          </a>
        </li>

        <li>
          <a className={styles.link} href="https://twitter.com/SmaugPenDraig">
            <span className="screenReader">
              {content.footer[language].twitter}
            </span>

            <TwitterIcon />
          </a>
        </li>

        <li>
          <a
            className={styles.link}
            href="https://www.instagram.com/meurigjenkins.film/"
          >
            <span className="screenReader">
              {content.footer[language].instagram}
            </span>

            <InstagramIcon />
          </a>
        </li>

        <li>
          <a className={styles.link} href="mailto:meurigjenkinscyd@gmail.com">
            <span className="screenReader">
              {content.footer[language].email}
            </span>

            <EmailIcon />
          </a>
        </li>
      </ul>
    </nav>

    <p className={styles.info}>
      &copy;&nbsp;Meurig Jenkins&nbsp;
      {Intl.DateTimeFormat("en-GB", { year: "numeric" }).format()}
    </p>
  </footer>
);
