import { ReactNode } from "react";
import { ButtonProps } from "react-bootstrap";
import { IconType } from "react-icons/lib";
import { NonIndexRouteObject } from "react-router";

//! ROUTER
export interface Route extends NonIndexRouteObject {
  children?: any;
  auth?: boolean;
  layout?: boolean;
  name?: string;
  returnPath?: string;
  roles?: string[];
}

//! NODATA
export interface NoDataObject {
  size?: string;
  color?: string;
  title?: string;
}

//! REDUX - AUTH
export interface Auth {
  user?: any;
  admin?: any;
}

//! THEME
/* eslint-disable no-unused-vars */
export enum LayoutTheme {
  DARK = "dark",
  LIGHT = "light",
}

export enum LayoutType {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
  OVERLAP = "overlap",
  CONDENSED = "condensed",
  COMBINED = "combined",
}

export enum LayoutWidth {
  DEFAULT = "default",
  FLUID = "fluid",
  BOXED = "boxed",
}

export enum LayoutPosition {
  DEFAULT = "default",
  STICKY = "sticky",
}

export enum LayoutColor {
  DEFAULT = "default",
  DARK = "dark",
  TRANSPARENT = "transparent",
}

export enum LayoutLanguageMode {
  LTR = "ltr",
  RTL = "rtl",
}

export enum LayoutVerticalLocation {
  LEFT = "left",
  RIGHT = "right",
}

export interface Theme {
  theme: LayoutTheme;
  type: LayoutType;
  width: LayoutWidth;
  position: LayoutPosition;
  color: LayoutColor;
  languageMode: LayoutLanguageMode;
  verticalLocation: LayoutVerticalLocation;
  settingMenuShow: boolean;
}

//! MENU
export type MenuItemTypes = {
  key: string;
  label?: string;
  icon?: any;
  className?: string;
  url?: string;
  end?: boolean;
  onClick?: (e: any) => any;
  badge?: {
    variant: string;
    text: string;
  };
  isDropdownHeader?: boolean;
  isDropdownDivider?: boolean;
  parentKey?: string;
  align?: "start" | "end";
  roles?: string[];
  children?: MenuItemTypes[];
};

//! PAGE TITLE
export interface PageTitle {
  documentTitle?: string;
  title?: string;
  subtitle?: string;
  search?: {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => any;
  };
  linkItems?: ({
    label?: ReactNode;
    path?: string;
    icon?: {
      type: IconType;
      className?: string;
    };
    hide?: boolean;
  } & ButtonProps)[];
  breadCrumbItems?: {
    label: ReactNode;
    subLabel?: ReactNode;
    path: string;
    active?: boolean;
  }[];
  hide?: {
    title?: boolean;
    subtitle?: boolean;
    search?: boolean;
    linkItems?: boolean;
    breadCrumbItems?: boolean;
  };
}