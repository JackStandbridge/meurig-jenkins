import type { RootState } from "@/store";
import type { LanguageSwitcherProps } from "./LanguageSwitcher";

import { updateLanguage } from "@/reducers/preferences";
import { connect } from "react-redux";
import { LanguageSwitcher as Component } from "./LanguageSwitcher";

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
