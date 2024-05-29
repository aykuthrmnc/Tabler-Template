import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface PageTitle {
  pageTitle?: {
    title?: string;
    subtitle?: string;
    search?: string;
    linkItems?: {
      label: ReactNode;
      path: string;
      icon?: IconType;
      className?: string;
      isHidden?: boolean;
    }[];
    breadCrumbItems: {
      label: ReactNode;
      subLabel?: ReactNode;
      path: string;
      active?: boolean;
    }[];
  } | null;
}

const initialState: PageTitle = {
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
