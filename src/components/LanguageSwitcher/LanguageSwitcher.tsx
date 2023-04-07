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
import { messages } from "./messages";

import styles from "./languageSwitcher.module.css";

export type LanguageSwitcherProps = {
  language: Language;
  updateLanguage: (language: Language) => void;
};

export const LanguageSwitcher = ({
  language,
  updateLanguage,
}: LanguageSwitcherProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
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

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleDismiss = () => {
    setExpanded(false);
    ref.current?.focus();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;

    if (isLanguage(value)) {
      updateLanguage(value);
    }
  };

  const popupId = styles.options;
  const buttonId = styles.button;

  return (
    <div className={styles.container}>
      <button
        ref={ref}
        onClick={handleClick}
        className={styles.button}
        defaultValue={language}
        aria-controls={popupId}
        id={buttonId}
      >
        <span className={"screenReader"}>{messages[language].prompt}</span>

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
        className={expanded ? styles.options : "screenReader"}
      >
        {languages.map((language) => (
          <Fragment key={language}>
            <input
              className={"screenReader"}
              type="radio"
              name="language"
              value={language}
              onChange={handleChange}
              id={language}
            />

            <label
              key={language}
              className={styles.option}
              onClick={handleDismiss}
              htmlFor={language}
            >
              {languageInfo[language].name}

              <Image
                className={styles.icon}
                width={40}
                height={40}
                src={languageInfo[language].flagUrl}
                alt={language}
              />
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
