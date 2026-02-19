import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";   // example path

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
