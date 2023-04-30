import type { RootState } from "@/store";
import type { NavProps } from "./Nav";

import { connect } from "react-redux";
import { Nav as Component } from "./Nav";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<NavProps, "language"> => ({
  language,
});

export const Nav = connect(mapStateToProps)(Component);
