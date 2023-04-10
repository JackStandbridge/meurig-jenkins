import { Language } from "@/types/language";
import styles from "./footer.module.scss";

export type FooterProps = {
  language: Language;
};

export const Footer = ({}: FooterProps): JSX.Element => (
  <>
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/@ffilmiaupendraigfilms6144"
            >
              <span className="screenReader">View my Youtube page</span>
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="40"
                viewBox="-35.20005 -41.33325 305.0671 247.9995"
                fill="currentColor"
              >
                <path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" />
                <path
                  d="M93.333 117.558l61.334-34.89-61.334-34.893z"
                  className={styles.invert}
                />
              </svg>
            </a>
          </li>
          <li>
            <a className={styles.link} href="mailto:meurigjenkinscyd@gmail.com">
              <span className="screenReader">Email me</span>
              <svg
                aria-hidden
                fill="currentColor"
                height="28"
                width="28"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 75.294 75.294"
              >
                <g>
                  <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://twitter.com/SmaugPenDraig">
              <span className="screenReader">View my Twitter page</span>
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <p className={styles.info}>
        &copy;&nbsp;Meurig Jenkins&nbsp;
        {Intl.DateTimeFormat("en-GB", { year: "numeric" }).format()}
      </p>
    </footer>
  </>
);
