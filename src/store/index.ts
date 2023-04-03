import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "@/reducers";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer,
  devTools: true,
});

export const makeStore = () => store;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
