import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Nav } from "@/components/Nav";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  const [toggled, setToggled] = useState(false);

  const handleClick = (): void => {
    setToggled(!toggled);
  };

  return (
    <header
      className={
        styles.header + " " + (toggled ? styles.toggled : styles.hidden)
      }
    >
      <div className={styles.mobileToggleContainer}>
        <button onClick={handleClick} className={styles.mobileToggle}>
          <span className="screenReader">Toggle navigation</span>
          <span className={styles.mobileToggleTop} />
          <span className={styles.mobileToggleBottom} />
        </button>
      </div>

      <div className={styles.content}>
        <Nav />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
