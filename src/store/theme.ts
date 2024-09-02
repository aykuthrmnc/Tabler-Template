import { createSlice } from "@reduxjs/toolkit";
import {
  LayoutColor,
  LayoutLanguageMode,
  LayoutPosition,
  LayoutTheme,
  LayoutType,
  LayoutVerticalLocation,
  LayoutWidth,
} from "~/types";
import { Theme } from "~/types";
import { JSONParser } from "~/utils/functions";

const initialState: Theme = {
  theme: LayoutTheme.DARK,
  type: LayoutType.HORIZONTAL,
  width: LayoutWidth.DEFAULT,
  position: LayoutPosition.DEFAULT,
  color: LayoutColor.DEFAULT,
  languageMode: LayoutLanguageMode.LTR,
  verticalLocation: LayoutVerticalLocation.LEFT,
  settingMenuShow: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getTheme: (state) => {
      const setting = JSONParser(localStorage.getItem(import.meta.env.VITE_THEME_KEY));

      // THEME
      if (
        setting?.theme === LayoutTheme.DARK ||
        (!(import.meta.env.VITE_THEME_KEY in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        state.theme = LayoutTheme.DARK;
        document.documentElement.setAttribute("data-bs-theme", LayoutTheme.DARK);
      } else {
        state.theme = LayoutTheme.LIGHT;
        document.documentElement.setAttribute("data-bs-theme", LayoutTheme.LIGHT);
      }

      // TYPE
      switch (setting?.type) {
        case LayoutType.COMBINED:
          state.type = LayoutType.COMBINED;
          break;
        case LayoutType.CONDENSED:
          state.type = LayoutType.CONDENSED;
          break;
        case LayoutType.HORIZONTAL:
          state.type = LayoutType.HORIZONTAL;
          break;
        case LayoutType.OVERLAP:
          state.type = LayoutType.OVERLAP;
          break;
        case LayoutType.VERTICAL:
          state.type = LayoutType.VERTICAL;
          break;
        default:
          state.type = LayoutType.HORIZONTAL;
          break;
      }

      // WIDTH
      switch (setting?.width) {
        case LayoutWidth.DEFAULT:
          state.width = LayoutWidth.DEFAULT;
          break;
        case LayoutWidth.FLUID:
          state.width = LayoutWidth.FLUID;
          break;
        case LayoutWidth.BOXED:
          state.width = LayoutWidth.BOXED;
          break;
        default:
          state.width = LayoutWidth.DEFAULT;
          break;
      }

      // POSITION
      switch (setting?.position) {
        case LayoutPosition.DEFAULT:
          state.position = LayoutPosition.DEFAULT;
          break;
        case LayoutPosition.STICKY:
          state.position = LayoutPosition.STICKY;
          break;
        default:
          state.position = LayoutPosition.DEFAULT;
          break;
      }

      // COLOR
      switch (setting?.color) {
        case LayoutColor.DEFAULT:
          state.color = LayoutColor.DEFAULT;
          break;
        case LayoutColor.DARK:
          state.color = LayoutColor.DARK;
          break;
        case LayoutColor.TRANSPARENT:
          state.color = LayoutColor.TRANSPARENT;
          break;
        default:
          state.color = LayoutColor.DEFAULT;
          break;
      }

      // LANGUAGE
      switch (setting?.languageMode) {
        case LayoutLanguageMode.LTR:
          state.languageMode = LayoutLanguageMode.LTR;
          document.documentElement.removeAttribute("dir");
          break;
        case LayoutLanguageMode.RTL:
          state.languageMode = LayoutLanguageMode.RTL;
          document.documentElement.setAttribute("dir", "rtl");
          break;
        default:
          state.languageMode = LayoutLanguageMode.LTR;
          document.documentElement.removeAttribute("dir");
          break;
      }

      // VERTICAL LOCATION
      switch (setting?.verticalLocation) {
        case LayoutVerticalLocation.LEFT:
          state.verticalLocation = LayoutVerticalLocation.LEFT;
          break;
        case LayoutVerticalLocation.RIGHT:
          state.verticalLocation = LayoutVerticalLocation.RIGHT;
          break;
        default:
          state.verticalLocation = LayoutVerticalLocation.LEFT;
          break;
      }
    },
    setTheme: (state, action: { payload: LayoutTheme }) => {
      state.theme = action.payload;
      document.documentElement.setAttribute("data-bs-theme", action.payload);
      localStorage.setItem(
        import.meta.env.VITE_THEME_KEY,
        JSON.stringify({ ...(state?.settingMenuShow && state), theme: action.payload }),
      );
    },
    setType: (state, action: { payload: LayoutType }) => {
      // if (LayoutColor.TRANSPARENT == state.color && [LayoutType.CONDENSED, LayoutType.HORIZONTAL, LayoutType.OVERLAP].includes(action.payload)) {
      //   state.color = LayoutColor.DEFAULT;
      // }
      state.type = action.payload;
    },
    setWidth: (state, action: { payload: LayoutWidth }) => {
      switch (action.payload) {
        case LayoutWidth.FLUID:
          state.width = action.payload;
          document.body.classList.remove("layout-boxed");
          document.body.classList.add("layout-fluid");
          break;
        case LayoutWidth.BOXED:
          state.width = action.payload;
          document.body.classList.remove("layout-fluid");
          document.body.classList.add("layout-boxed");
          break;
        default:
          state.width = action.payload;
          document.body.classList.remove("layout-fluid", "layout-boxed");
          break;
      }
    },
    setPosition: (state, action: { payload: LayoutPosition }) => {
      state.position = action.payload;
    },
    setColor: (state, action: { payload: LayoutColor }) => {
      state.color = action.payload;
    },
    setLanguageMode: (state, action: { payload: LayoutLanguageMode }) => {
      switch (action.payload) {
        case LayoutLanguageMode.LTR:
          state.languageMode = LayoutLanguageMode.LTR;
          document.documentElement.removeAttribute("dir");
          break;
        case LayoutLanguageMode.RTL:
          state.languageMode = LayoutLanguageMode.RTL;
          document.documentElement.setAttribute("dir", "rtl");
          break;
        default:
          state.languageMode = LayoutLanguageMode.LTR;
          document.documentElement.removeAttribute("dir");
          break;
      }
    },
    setVerticalLocation: (state, action: { payload: LayoutVerticalLocation }) => {
      state.verticalLocation = action.payload;
    },
    setSettingMenuShow: (state, action: { payload: boolean }) => {
      state.settingMenuShow = action.payload;
    },
  },
});

export const {
  getTheme,
  setTheme,
  setType,
  setWidth,
  setPosition,
  setColor,
  setLanguageMode,
  setVerticalLocation,
  setSettingMenuShow,
} = theme.actions;
export default theme.reducer;
