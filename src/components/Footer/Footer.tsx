import { Language } from "@/types/language";
import styles from "./footer.module.css";

export type FooterProps = {
  language: Language;
};

export const Footer = ({}: FooterProps): JSX.Element => (
  <footer className={styles.footer}>
    &copy;&nbsp;Meurig Jenkins&nbsp;
    {Intl.DateTimeFormat("en-GB", { year: "numeric" }).format()}
  </footer>
);
