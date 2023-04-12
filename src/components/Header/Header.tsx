import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Nav } from "@/components/Nav";
import styles from "./header.module.scss";

export type HeaderProps = {};

export const Header = ({}: HeaderProps): JSX.Element => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  return (
    <header
      className={
        styles.header + " " + (toggled ? styles.toggled : styles.hidden)
      }
    >
      <button onClick={handleClick} className={styles.mobileToggle}>
        <span className="screenReader">Toggle navigation</span>
        <span className={styles.mobileToggleTop} />
        <span className={styles.mobileToggleBottom} />
      </button>
      <div className={styles.content}>
        <Nav />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
