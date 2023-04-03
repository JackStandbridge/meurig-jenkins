import Link from "next/link";

export type NavProps = {};

export const Nav = ({}: NavProps): JSX.Element => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">About</Link>
      </li>
      <li>
        <Link href="projects">Projects</Link>
      </li>
    </ul>
  </nav>
);
