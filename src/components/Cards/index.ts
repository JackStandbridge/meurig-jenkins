import type { RootState } from "@/store";
import type { CardsProps } from "./Cards";

import { connect } from "react-redux";
import { Cards as Component } from "./Cards";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<CardsProps, "language"> => ({
  language,
});

export const Cards = connect(mapStateToProps)(Component);
