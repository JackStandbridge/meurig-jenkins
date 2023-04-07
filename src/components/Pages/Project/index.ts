import { RootState } from "@/store";
import { connect } from "react-redux";
import { Project as Component } from "./Project";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Project = connect(mapStateToProps)(Component);
