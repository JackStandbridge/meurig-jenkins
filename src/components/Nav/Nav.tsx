import type { Language } from "@/types/language";

import Link from "next/link";
import { content } from "@/content/site";
import styles from "./nav.module.scss";
import { Dropdown } from "./Dropdown";
import { useDismissBehaviour } from "./utils/useDismissBehaviour";
import { getItemsForDropdown } from "./utils/getItemsForDropdown";

export type NavProps = {
  language: Language;
};

export const Nav = ({ language }: NavProps): JSX.Element => {
  const { expanded, handleClick, handleBlur } = useDismissBehaviour({
    containerSelector: `.${styles.nav}`,
  });

  return (
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

        <li className={styles.li} onBlur={handleBlur}>
          <Dropdown
            expanded={expanded === "projects"}
            handleClick={(): void => handleClick("projects")}
            title={{
              name: content.nav[language].projects.name,
              href: "/projects",
            }}
            items={getItemsForDropdown(language, "projects")}
          />
        </li>

        <li className={styles.li} onBlur={handleBlur}>
          <Dropdown
            expanded={expanded === "shortfilms"}
            handleClick={(): void => handleClick("shortfilms")}
            title={{
              name: content.nav[language].shortfilms.name,
              href: "/shortfilms",
            }}
            items={getItemsForDropdown(language, "shortfilms")}
          />
        </li>

        <li className={styles.li}>
          <Link className={styles.link} href="/pendraigfilms">
            {content.nav[language].company}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
