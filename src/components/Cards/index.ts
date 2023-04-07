import { RootState } from "@/store";
import { connect } from "react-redux";
import { Cards as Component } from "./Cards";

const mapStateToProps = ({ preferences: { language } }: RootState) => ({
  language,
});

export const Cards = connect(mapStateToProps)(Component);
