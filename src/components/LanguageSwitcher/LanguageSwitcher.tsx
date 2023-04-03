import { isLanguage } from "@/guards/isLanguage";
import { Language } from "@/types/language";
import { ChangeEventHandler } from "react";
import styles from "./languageSwitcher.module.css";

export type LanguageSwitcherProps = {
  language: Language;
  updateLanguage: (language: Language) => void;
};

export const LanguageSwitcher = ({
  language,
  updateLanguage,
}: LanguageSwitcherProps): JSX.Element => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.currentTarget.value;

    console.log(value);

    console.log(value in Language);

    if (isLanguage(value)) {
      updateLanguage(Language[value]);
    }
  };

  return (
    <>
      <select
        className={styles.select}
        onChange={handleChange}
        defaultValue={language}
      >
        {Object.entries(Language).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
