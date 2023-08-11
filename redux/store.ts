import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./reducer/settingReducer";

export const store = configureStore({
  reducer: {
    getSetting: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
