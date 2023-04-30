import type { RootState } from "@/store";
import type { HeroProps } from "./Hero";

import { connect } from "react-redux";
import { Hero as Component } from "./Hero";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<HeroProps, "language"> => ({
  language,
});

export const Hero = connect(mapStateToProps)(Component);
