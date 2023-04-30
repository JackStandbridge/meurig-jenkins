import type { Language } from "@/types/language";
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export type PreferencesState = {
  language: Language;
};

const initialState: PreferencesState = {
  language: "English",
};

const updateLanguageReducer = (
  state: PreferencesState,
  action: PayloadAction<Language>
): void => {
  state.language = action.payload;
};

const preferences = createSlice({
  initialState,
  name: "preferences",
  reducers: {
    updateLanguage: updateLanguageReducer,
  },
});

export const reducer = preferences.reducer;
export const { updateLanguage } = preferences.actions;
