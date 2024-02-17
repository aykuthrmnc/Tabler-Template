import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "~/types";
import { decryptValue, encryptValue } from "~/utils/functions";

const initialState: Auth = {
  user: null,
  admin: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => {
      const value = localStorage.getItem(import.meta.env.VITE_AUTH_SESSION_KEY);

      if (value) {
        const userValue = decryptValue(value);
        state.user = userValue ? JSON.parse(userValue)?.user : null;
        state.admin = userValue ? JSON.parse(userValue)?.admin : null;
      }
    },
    setUser: (state, action) => {
      switch (action.payload.type) {
        case "admin":
          state.admin = action.payload?.user;
          break;
        case "user":
          state.user = action.payload?.user;
          break;
      }

      if (action.payload) {
        const value = encryptValue(state);

        localStorage.setItem(import.meta.env.VITE_AUTH_SESSION_KEY, value);
      } else {
        localStorage.removeItem(import.meta.env.VITE_AUTH_SESSION_KEY);
      }
    },
    logoutUser: (state) => {
      state.user = null;
      state.admin = null;
      localStorage.removeItem(import.meta.env.VITE_AUTH_SESSION_KEY);
    },
  },
});

export const { getUser, setUser, logoutUser } = auth.actions;
export default auth.reducer;
