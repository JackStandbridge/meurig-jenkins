import { RootState } from "@/store";
import { connect } from "react-redux";
import { Shortfilm as Component } from "./Shortfilm";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Shortfilm = connect(mapStateToProps)(Component);
