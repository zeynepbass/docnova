import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import invoiceReducer from "../redux/invoiceSlice";
import languageReducer from "../redux/languageSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
    language: languageReducer,
  },
});
