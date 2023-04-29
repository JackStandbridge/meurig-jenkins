import Link from "next/link";
import styles from "./nav.module.scss";

export type Item = {
  href: string;
  name: string;
};

export type DropdownProps = {
  handleClick: () => void;
  title: Item;
  items: Item[];
  expanded: boolean;
};

export const Dropdown = ({
  title,
  items,
  handleClick,
  expanded,
}: DropdownProps): JSX.Element => (
  <>
    <Link className={styles.link} href={title.href}>
      {title.name}
    </Link>

    <div data-dropdown-container={true} className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={handleClick}>
        <span className="screenReader">Toggle projects submenu</span>
        <svg
          height="20"
          width="20"
          viewBox="0 0 185.343 185.343"
          className={styles.chevron}
        >
          <path
            fill="currentColor"
            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
          />
        </svg>
      </button>

      <ul className={expanded ? styles.dropdownExpanded : styles.dropdown}>
        {items.map((child, i) => (
          <li className={styles.li} key={i}>
            <Link className={styles.link} href={child.href}>
              {child.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);
