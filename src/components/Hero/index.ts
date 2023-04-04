import { RootState } from "@/store";
import { connect } from "react-redux";
import { Hero as Component } from "./Hero";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Hero = connect(mapStateToProps)(Component);
