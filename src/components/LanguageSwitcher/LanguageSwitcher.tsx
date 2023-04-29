import {
  ChangeEventHandler,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import { isLanguage } from "@/guards/isLanguage";
import { Language, languageInfo, languages } from "@/types/language";
import { content } from "@/content/site";

import styles from "./languageSwitcher.module.scss";

export type LanguageSwitcherProps = {
  language: Language;
  updateLanguage: (language: Language) => void;
};

export const LanguageSwitcher = ({
  language,
  updateLanguage,
}: LanguageSwitcherProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const keyListener = ({ key, target }: KeyboardEvent) => {
      if (key === "Escape") {
        setExpanded(false);
        return;
      }

      if (key === "Enter") {
        if (!(target instanceof HTMLElement)) {
          return;
        }

        if (target.closest(`.${styles.options}`)) {
          setExpanded(false);
        }
      }
    };

    const clickListener = ({ target }: MouseEvent) => {
      if (!target) {
        return;
      }

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!target.closest(`.${styles.container}`)) {
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

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleDismiss = () => {
    setExpanded(false);
    buttonRef.current?.focus();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;

    if (isLanguage(value)) {
      updateLanguage(value);
    }
  };

  const popupId = styles.options;
  const buttonId = styles.button;

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={styles.button}
        defaultValue={language}
        aria-controls={popupId}
        id={buttonId}
      >
        <span className={"screenReader"}>
          {content.languageSwitcher[language].prompt}
        </span>

        <Image
          className={styles.icon}
          width={40}
          height={40}
          src={languageInfo[language].flagUrl}
          alt={language}
        />
      </button>

      <div
        id={popupId}
        aria-labelledby={buttonId}
        className={expanded ? styles.options : styles.optionsHidden}
      >
        {languages.map((lang) => (
          <Fragment key={lang}>
            <input
              className="screenReader"
              type="radio"
              checked={language === lang}
              name="language"
              value={lang}
              onChange={handleChange}
              id={lang}
            />

            <label
              key={lang}
              className={styles.option}
              onClick={handleDismiss}
              htmlFor={lang}
            >
              {languageInfo[lang].name}

              <Image
                className={styles.icon}
                width={40}
                height={40}
                src={languageInfo[lang].flagUrl}
                alt={lang}
              />
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
