import { RootState } from "@/store";
import { connect } from "react-redux";
import { Carousel as Component } from "./Carousel";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Carousel = connect(mapStateToProps)(Component);
