import type { RootState } from "@/store";
import type { CompanyProps } from "./Company";

import { connect } from "react-redux";
import { Company as Component } from "./Company";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<CompanyProps, "language"> => ({
  language,
});

export const Company = connect(mapStateToProps)(Component);
