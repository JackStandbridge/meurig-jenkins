import { RootState } from "@/store";
import { connect } from "react-redux";
import { Home as Component } from "./Home";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Home = connect(mapStateToProps)(Component);
