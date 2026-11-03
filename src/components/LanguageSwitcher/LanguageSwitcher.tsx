import type { ChangeEventHandler } from "react";
import type { Language } from "@/types/language";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { isLanguage } from "@/guards/isLanguage";
import { languageInfo, languages } from "@/types/language";
import { useSite } from "@/components/Site";

import styles from "./languageSwitcher.module.scss";

export type LanguageSwitcherProps = {
  language: Language;
  updateLanguage: (language: Language) => void;
};

export const LanguageSwitcher = ({
  language,
  updateLanguage,
}: LanguageSwitcherProps): JSX.Element => {
  const { text } = useSite();
  const [expanded, setExpanded] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const keyListener = ({ key, target }: KeyboardEvent): void => {
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

    const clickListener = ({ target }: MouseEvent): void => {
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

  const handleClick = (): void => {
    setExpanded(!expanded);
  };

  const handleDismiss = (): void => {
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
          {text[language].chooseLanguage}
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
              {...(expanded ? {} : { tabIndex: -1 })}
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
