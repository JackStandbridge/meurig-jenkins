import { Language } from "@/types/language";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
