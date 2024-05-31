import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "~/store/apiSlice";
import auth from "./auth";
import theme from "./theme";
import pageTitle from "./pageTitle";

const store = configureStore({
  reducer: {
    auth,
    theme,
    pageTitle,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([apiSlice.middleware]),
  // devTools: import.meta.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
