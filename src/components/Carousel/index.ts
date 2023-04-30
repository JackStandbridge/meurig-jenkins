import type { RootState } from "@/store";
import type { CarouselProps } from "./Carousel";

import { connect } from "react-redux";
import { Carousel as Component } from "./Carousel";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<CarouselProps, "language"> => ({
  language,
});

export const Carousel = connect(mapStateToProps)(Component);
