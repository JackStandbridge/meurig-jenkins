import type { ReactNode } from "react";
import type { Language } from "@/types/language";

import useEmblaCarousel from "embla-carousel-react";

import { Slide } from "./Slide";
import { content } from "@/content/site";

import styles from "./carousel.module.scss";

export type CarouselProps = {
  children: ReactNode;
  language: Language;
};

export const Carousel = ({
  children,
  language,
}: CarouselProps): JSX.Element => {
  const [emblaRef, carousel] = useEmblaCarousel({ skipSnaps: true });

  const handlePrev = (): void => {
    if (carousel?.canScrollPrev()) {
      carousel.scrollPrev();
    }
  };

  const handleNext = (): void => {
    if (carousel?.canScrollNext()) {
      carousel.scrollNext();
    }
  };

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.track}>{children}</div>

      <button onClick={handlePrev} className={styles.prev}>
        <span className="screenReader">
          {content.carousel[language].previousSlide}
        </span>
      </button>

      <button onClick={handleNext} className={styles.next}>
        <span className="screenReader">
          {content.carousel[language].nextSlide}
        </span>
      </button>
    </div>
  );
};

Carousel.Slide = Slide;
