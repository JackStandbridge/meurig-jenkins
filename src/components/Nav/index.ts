import { RootState } from "@/store";
import { connect } from "react-redux";
import { Nav as Component } from "./Nav";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Nav = connect(mapStateToProps)(Component);
