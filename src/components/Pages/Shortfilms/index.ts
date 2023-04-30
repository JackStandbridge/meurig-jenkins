import type { RootState } from "@/store";
import type { ShortfilmsProps } from "./Shortfilms";

import { connect } from "react-redux";
import { Shortfilms as Component } from "./Shortfilms";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<ShortfilmsProps, "language"> => ({
  language,
});

export const Shortfilms = connect(mapStateToProps)(Component);
