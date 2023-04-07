import type { AboutProps } from "./About";

import { RootState } from "@/store";
import { connect } from "react-redux";
import { About as Component } from "./About";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<AboutProps, "language"> => ({
  language,
});

export const About = connect(mapStateToProps)(Component);
