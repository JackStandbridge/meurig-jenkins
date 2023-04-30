import type { RootState } from "@/store";
import type { ProjectsProps } from "./Projects";

import { connect } from "react-redux";
import { Projects as Component } from "./Projects";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<ProjectsProps, "language"> => ({
  language,
});

export const Projects = connect(mapStateToProps)(Component);
