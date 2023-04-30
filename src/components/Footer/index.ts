import type { RootState } from "@/store";
import type { FooterProps } from "./Footer";

import { connect } from "react-redux";
import { Footer as Component } from "./Footer";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<FooterProps, "language"> => ({
  language,
});

export const Footer = connect(mapStateToProps)(Component);
