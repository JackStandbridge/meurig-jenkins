import type { RootState } from "@/store";
import type { ShortfilmProps } from "./Shortfilm";

import { connect } from "react-redux";
import { Shortfilm as Component } from "./Shortfilm";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<ShortfilmProps, "language"> => ({
  language,
});

export const Shortfilm = connect(mapStateToProps)(Component);
