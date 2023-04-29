import { RootState } from "@/store";
import { connect } from "react-redux";
import { Shortfilms as Component } from "./Shortfilms";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Shortfilms = connect(mapStateToProps)(Component);
