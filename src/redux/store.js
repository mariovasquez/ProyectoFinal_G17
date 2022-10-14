import { configureStore } from "@reduxjs/toolkit";
import footerSlice from "./slices/footerSlice";


export const store = configureStore({
  reducer: {
    footer: footerSlice,
  }
});