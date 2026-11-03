import type { RootState } from "@/store";
import type { StandardProps } from "./Standard";

import { connect } from "react-redux";
import { Standard as Component } from "./Standard";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<StandardProps, "language"> => ({
  language,
});

export const Standard = connect(mapStateToProps)(Component);
