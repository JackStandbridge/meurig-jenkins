import { RootState } from "@/store";
import { connect } from "react-redux";
import { Footer as Component } from "./Footer";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Footer = connect(mapStateToProps)(Component);
