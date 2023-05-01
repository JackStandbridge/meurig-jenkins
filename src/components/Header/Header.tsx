import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Nav } from "@/components/Nav";
import styles from "./header.module.scss";
import { useDetectScrollDirection } from "./utils/useDetectScrollDirection";

export const Header = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (): void => {
    setExpanded(!expanded);
  };

  const scrollingDown = useDetectScrollDirection();

  const classNames = [styles.header];

  if (expanded) {
    classNames.push(styles.expanded);
  } else {
    classNames.push(styles.collapsed);
  }

  if (!expanded && scrollingDown) {
    classNames.push(styles.hidden);
  }

  return (
    <header className={classNames.join(" ")}>
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
