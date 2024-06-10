import { createSlice } from "@reduxjs/toolkit";
import { MouseEventHandler, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface PageTitle {
  title?: string;
  pretitle?: string;
  subtitle?: string;
  search?: {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => any;
  };
  linkItems?: {
    label: ReactNode;
    url?: string;
    icon?: {
      type: IconType;
      className?: string;
    };
    variant?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }[];
  breadCrumbItems?: {
    label: ReactNode;
    subLabel?: ReactNode;
    path: string;
    active?: boolean;
  }[];
}

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
