import Image from "next/image";

import styles from "./carousel.module.scss";

export type SlideProps = {
  src: string;
  alt: string;
};

export const Slide = ({ src, alt }: SlideProps): JSX.Element => {
  return (
    <article className={styles.slide}>
      <Image
        src={src}
        alt={alt}
        width={900}
        height={506}
        className={styles.image}
      />
    </article>
  );
};
