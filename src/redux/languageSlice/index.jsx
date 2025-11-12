import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n.js"; 

const savedLanguage = localStorage.getItem("language") || "en";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLanguage: savedLanguage,
  },
  reducers: {
    changeLanguage: (state, action) => {
      const newLang = action.payload;
      state.currentLanguage = newLang;
      localStorage.setItem("language", newLang);
      i18n.changeLanguage(newLang);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
