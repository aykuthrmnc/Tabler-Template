import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "~/types";
import { decryptValue, encryptValue } from "~/utils/functions";

const initialState: Auth = {
  user: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => {
      const value = localStorage.getItem(import.meta.env.VITE_AUTH_SESSION_KEY);

      if (value) {
        const userValue = decryptValue(value);
        state.user = userValue ? JSON.parse(userValue) : null;
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;

      if (action.payload) {
        const value = encryptValue(action.payload);

        localStorage.setItem(import.meta.env.VITE_AUTH_SESSION_KEY, value);
      } else {
        localStorage.removeItem(import.meta.env.VITE_AUTH_SESSION_KEY);
      }
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem(import.meta.env.VITE_AUTH_SESSION_KEY);
    },
  },
});

export const { getUser, setUser, logoutUser } = auth.actions;
export default auth.reducer;
