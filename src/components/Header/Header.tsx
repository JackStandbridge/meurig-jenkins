import { LanguageSwitcher } from "../LanguageSwitcher";
import { Nav } from "../Nav";
import styles from "./header.module.css";

export type HeaderProps = {};

export const Header = ({}: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <Nav />
      <LanguageSwitcher />
    </header>
  );
};
