import { RootState } from "@/store";
import { connect } from "react-redux";
import { Projects as Component } from "./Projects";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Projects = connect(mapStateToProps)(Component);
