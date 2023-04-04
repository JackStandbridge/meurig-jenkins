import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Nav } from "../Nav";
import styles from "./header.module.css";

export type HeaderProps = {};

export const Header = ({}: HeaderProps): JSX.Element => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  return (
    <div className="container">
      <header
        className={
          styles.header + " " + (toggled ? styles.toggled : styles.hidden)
        }
      >
        <button onClick={handleClick} className={styles.mobileToggle}></button>
        <div className={styles.content}>
          <Nav />
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};
