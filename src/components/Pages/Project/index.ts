import type { RootState } from "@/store";
import type { ProjectProps } from "./Project";

import { connect } from "react-redux";
import { Project as Component } from "./Project";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<ProjectProps, "language"> => ({
  language,
});

export const Project = connect(mapStateToProps)(Component);
