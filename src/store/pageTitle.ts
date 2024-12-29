import { createSlice } from "@reduxjs/toolkit";
import { PageTitle } from "~/types";

const initialState: { pageTitle?: PageTitle | null } = {
  pageTitle: null,
};

const pageTitle = createSlice({
  name: "pageTitle",
  initialState,
  reducers: {
    setPageTitle: (state, { payload }) => {
      state.pageTitle = payload;
    },
  },
});

export const { setPageTitle } = pageTitle.actions;
export default pageTitle.reducer;
