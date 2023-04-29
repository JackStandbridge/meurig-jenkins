import { Language } from "@/types/language";
import { useEffect, useState, FocusEventHandler } from "react";
import Link from "next/link";
import { content } from "@/content/site";
import styles from "./nav.module.scss";
import { Dropdown, Item } from "./Dropdown";
import { ValueOf } from "@/types/utils";

export type NavProps = {
  language: Language;
};

const getItemsForDropdown = (
  language: Language,
  name: "shortfilms" | "projects"
) => {
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

  const handleClick = (target: string) => {
    setExpanded((expanded) => (expanded === target ? null : target));
  };

  useEffect(() => {
    const keyListener = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setExpanded(null);
        return;
      }
    };

    const clickListener = ({ target }: MouseEvent) => {
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
            handleClick={() => handleClick("shortfilms")}
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
            handleClick={() => handleClick("projects")}
            title={{
              name: content.nav[language].projects.name,
              href: "/projects",
            }}
            items={getItemsForDropdown(language, "projects")}
          />
        </li>
      </ul>
    </nav>
  );
};
