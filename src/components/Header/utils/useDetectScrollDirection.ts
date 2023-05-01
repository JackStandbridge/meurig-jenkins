import { useEffect, useState } from "react";

export const useDetectScrollDirection = (): boolean => {
  const [_, setPreviousScrollPosition] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const listener = (): void => {
      setPreviousScrollPosition((previousScrollPosition) => {
        const pastTop = window.scrollY <= 0;
        const pastBottom =
          window.scrollY + window.innerHeight >= document.body.clientHeight;

        if (pastTop || pastBottom) {
          return window.scrollY;
        }

        setScrollingDown(previousScrollPosition < window.scrollY);

        return window.scrollY;
      });
    };

    window.addEventListener("scroll", listener);

    return (): void => {
      window.removeEventListener("scroll", listener);
    };
  }, [setPreviousScrollPosition, setScrollingDown]);

  return scrollingDown;
};
