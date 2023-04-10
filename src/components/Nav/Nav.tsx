import { Language } from "@/types/language";
import { useEffect, useState, FocusEventHandler } from "react";
import Link from "next/link";
import { content } from "@/content/site";
import styles from "./nav.module.scss";

export type NavProps = {
  language: Language;
};

export const Nav = ({ language }: NavProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const keyListener = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setExpanded(false);
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
        setExpanded(false);
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
    console.log(e.target);

    if (!e.relatedTarget?.closest(`[data-dropdown-container]`)) {
      setExpanded(false);
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
          <Link className={styles.link} href="/projects">
            {content.nav[language].projects}
          </Link>

          <div data-dropdown-container={true}>
            <button className={styles.dropdownButton} onClick={handleClick}>
              <span className="screenReader">Toggle projects submenu</span>
              <svg
                height="20"
                width="20"
                viewBox="0 0 185.343 185.343"
                className={styles.chevron}
              >
                <path
                  fill="currentColor"
                  d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                />
              </svg>
            </button>

            <ul
              className={expanded ? styles.dropdownExpanded : styles.dropdown}
            >
              <li className={styles.li}>
                <Link className={styles.link} href="/projects/commercial">
                  {content.nav[language].commercial}
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="/projects/personal">
                  {content.nav[language].personal}
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
