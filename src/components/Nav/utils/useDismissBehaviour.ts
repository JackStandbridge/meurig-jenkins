import type { FocusEventHandler } from "react";
import { useEffect, useState } from "react";

type UseDismissBehaviour = {
  containerSelector: string;
};

export const useDismissBehaviour = ({
  containerSelector,
}: UseDismissBehaviour): {
  expanded: string | null;
  handleClick: (target: string) => void;
  handleBlur: FocusEventHandler;
} => {
  const [expanded, setExpanded] = useState<null | string>(null);

  const handleClick = (target: string): void => {
    setExpanded((expanded) => (expanded === target ? null : target));
  };

  useEffect(() => {
    const keyListener = ({ key }: KeyboardEvent): void => {
      if (key === "Escape") {
        setExpanded(null);
        return;
      }
    };

    const clickListener = ({ target }: MouseEvent): void => {
      if (!target) {
        return;
      }

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!target.closest(containerSelector)) {
        setExpanded(null);
      }
    };

    document.addEventListener("click", clickListener);
    document.addEventListener("keydown", keyListener);

    return (): void => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keydown", keyListener);
    };
  }, [containerSelector]);

  const handleBlur: FocusEventHandler = (e) => {
    if (!e.relatedTarget?.closest(`[data-dropdown-container]`)) {
      setExpanded(null);
    }
  };

  return { expanded, handleClick, handleBlur };
};
