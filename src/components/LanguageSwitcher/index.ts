import type { RootState } from "@/store";

import { updateLanguage } from "@/reducers/preferences";
import { connect } from "react-redux";
import {
  LanguageSwitcher as Component,
  LanguageSwitcherProps,
} from "./LanguageSwitcher";

const mapStateToProps = ({
  preferences: { language },
}: RootState): Pick<LanguageSwitcherProps, "language"> => ({
  language,
});

const mapDispatchToProps: Pick<LanguageSwitcherProps, "updateLanguage"> = {
  updateLanguage,
};

export const LanguageSwitcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
