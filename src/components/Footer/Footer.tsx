import type { Language } from "@/types/language";
import type { SiteLinks } from "@/types/content";

import { YoutubeIcon } from "./YoutubeIcon";
import { EmailIcon } from "./EmailIcon";
import { TwitterIcon } from "./TwitterIcon";
import { InstagramIcon } from "./InstagramIcon";

import styles from "./footer.module.scss";
import { useSite } from "@/components/Site";

export type FooterProps = {
  language: Language;
};

const icons: Record<keyof SiteLinks, () => JSX.Element> = {
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  email: EmailIcon,
};

const hrefFor = (name: keyof SiteLinks, link: string): string =>
  name === "email" && !link.startsWith("mailto:") ? `mailto:${link}` : link;

export const Footer = ({ language }: FooterProps): JSX.Element => {
  const { links, text } = useSite();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {(Object.keys(icons) as (keyof SiteLinks)[]).map((name) => {
            const link = links[name];
            const Icon = icons[name];

            return !link ? null : (
              <li key={name}>
                <a className={styles.link} href={hrefFor(name, link)}>
                  <span className="screenReader">{text[language][name]}</span>

                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className={styles.info}>
        &copy;&nbsp;Meurig Jenkins&nbsp;
        {Intl.DateTimeFormat("en-GB", { year: "numeric" }).format()}
      </p>
    </footer>
  );
};
