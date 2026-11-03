import type { Language } from "@/types/language";

import Link from "next/link";
import { useSite } from "@/components/Site";
import styles from "./nav.module.scss";
import { Dropdown } from "./Dropdown";
import { useDismissBehaviour } from "./utils/useDismissBehaviour";

export type NavProps = {
  language: Language;
};

export const Nav = ({ language }: NavProps): JSX.Element => {
  const { menu, text } = useSite();

  const { expanded, handleClick, handleBlur } = useDismissBehaviour({
    containerSelector: `.${styles.nav}`,
  });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu.map(({ path, label, children }) =>
          children.length ? (
            <li className={styles.li} onBlur={handleBlur} key={path}>
              <Dropdown
                expanded={expanded === path}
                handleClick={(): void => handleClick(path)}
                title={{ name: label[language], href: path }}
                toggleLabel={`${text[language].showSubmenu} ${label[language]}`}
                items={children.map((child) => ({
                  name: child.label[language],
                  href: child.path,
                }))}
              />
            </li>
          ) : (
            <li className={styles.li} key={path}>
              <Link className={styles.link} href={path}>
                {label[language]}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
