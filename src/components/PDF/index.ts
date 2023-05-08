import type { RootState } from "@/store";
import type { PDFProps } from "./PDF";

import { connect } from "react-redux";
import { PDF as Component } from "./PDF";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<PDFProps, "language"> => ({
  language,
});

export const PDF = connect(mapStateToProps)(Component);
