import type { Language } from "@/types/language";
import type { FocusEventHandler } from "react";
import type { Item } from "./Dropdown";
import type { ValueOf } from "@/types/utils";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/content/site";
import styles from "./nav.module.scss";
import { Dropdown } from "./Dropdown";

export type NavProps = {
  language: Language;
};

const getItemsForDropdown = (
  language: Language,
  name: "shortfilms" | "projects"
): Item[] => {
  return (
    Object.entries(content.nav[language][name].items) as [
      keyof (typeof content.nav)[Language][typeof name]["items"],
      ValueOf<(typeof content.nav)[Language][typeof name]["items"]>
    ][]
  ).map(
    ([route, item]): Item => ({
      href: `/${name}/${route}`,
      name: item,
    })
  );
};

export const Nav = ({ language }: NavProps): JSX.Element => {
  const [expanded, setExpanded] = useState<null | string>(null);

  const handleClick = (target: string): void => {
    setExpanded((expanded) => (expanded === target ? null : target));
  };

  useEffect(() => {
    const keyListener = ({ key }: KeyboardEvent): void => {
      if (key === "Escape") {
        setExpanded(null);
        return;
      }
    };

    const clickListener = ({ target }: MouseEvent): void => {
      if (!target) {
        return;
      }

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!target.closest(`.${styles.nav}`)) {
        setExpanded(null);
      }
    };

    document.addEventListener("click", clickListener);
    document.addEventListener("keydown", keyListener);

    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keydown", keyListener);
    };
  }, []);

  const handleBlur: FocusEventHandler = (e) => {
    if (!e.relatedTarget?.closest(`[data-dropdown-container]`)) {
      setExpanded(null);
    }
  };

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
            expanded={expanded === "shortfilms"}
            handleClick={(): void => handleClick("shortfilms")}
            title={{
              name: content.nav[language].shortfilms.name,
              href: "/shortfilms",
            }}
            items={getItemsForDropdown(language, "shortfilms")}
          />
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

        <li className={styles.li}>
          <Link className={styles.link} href="/pendraigfilms">
            {content.nav[language].company}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
