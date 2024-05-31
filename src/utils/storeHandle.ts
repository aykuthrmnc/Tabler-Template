import store from "~/store";
import { apiSlice } from "~/store/apiSlice";
import { getUser, logoutUser, setUser } from "~/store/auth";
import { getTheme, setSettingMenuShow, setTheme } from "~/store/theme";
import { LayoutTheme } from "~/types";

//! USER
export const getUserHandle = () => {
  store.dispatch(getUser());
};

export const loginUserHandle = (data: any, type = "user") => {
  store.dispatch(setUser({ user: data, type }));
};

export const logoutUserHandle = () => {
  store.dispatch(logoutUser());
  store.dispatch(apiSlice.util.resetApiState());
  // Reset specific caches
  // store.dispatch(apiSlice.util.invalidateTags(["Category"])
};

//! THEME
export const getThemeHandle = () => {
  store.dispatch(getTheme());
};

export const setThemeHandle = (data: LayoutTheme) => {
  store.dispatch(setTheme(data));
};

export const setSettingMenuHandle = (data: boolean) => {
  store.dispatch(setSettingMenuShow(data));
};
