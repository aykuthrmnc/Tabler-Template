import { HTMLInputTypeAttribute, ReactNode } from "react";

//! DATAGRID
export interface DataGridObject {
  title?: string;
  head: DataGridHeadType[];
  body: (DataGridBodyObject | any)[];
  searchable?: boolean;
  asyncSearchable?: boolean;
  emptyMessage?: string;
  isError?: boolean;
  error?: any;
  loading?: boolean;
  pagination?: DataGridPaginationObject;
  sizePerPageList?: {
    text: string;
    value: number;
  }[];
  hideNoDataIcon?: boolean;
  noDataIcon?: ReactNode;
  deleteIcon?: ReactNode;
  creatable?: boolean | ((e: any) => any);
  editable?: boolean | ((e: any) => any);
  deletable?: boolean | ((e: any) => any);
  getValues?: (e: any) => any;
  form?: any;
  customFields?: {
    header?: string;
    text?: ((e: any) => any) | string;
    icon?: ((e: any) => any) | any;
    center?: boolean;
    className?: string;
    onClick?: (e: any) => any;
  }[];
  // children?: ReactNode;
  // [x: string]: any;
}

export type DataGridHeadType =
  | DataGridHeadObject
  | DataGridHeadReactSelectObject
  | DataGridHeadReactSelectAsyncUrlObject
  | DataGridHeadNumericFormatObject
  | DataGridHeadPatternFormatObject
  | DataGridHeadDateTimeObject;

  export interface DataGridHeadObject {
  name: string;
  key: string;
  sortable?: boolean;
  width?: string;
  center?: boolean;
  type?: HTMLInputTypeAttribute | "PhoneInput";
  placeholder?: string;
  valueGetter?: (e: any) => any;
}

export interface DataGridHeadReactSelectObject extends DataGridHeadObject {
  type?: "ReactSelect" | "ReactSelectAsync" | "ReactSelectCreatable" | "ReactSelectAsyncCreatable";
  onChange?: (e: any, item?: any) => any;
  isValidNewOption?: (e: any) => any;
  options?: any[] | any;
  submit?: boolean;
  reset?: boolean;
  onCreateOption?: (e: any) => any;
}

export interface DataGridHeadReactSelectAsyncUrlObject extends DataGridHeadObject {
  type?: "ReactSelectAsyncUrl";
  onChange?: (e: any, item?: any) => any;
  getOptionValues: (e: any) => any;
  isValidOptionsUrl?: (e: any) => any;
  optionsUrl: string | ((e: any) => any);
  submit?: boolean;
  reset?: boolean;
}

export interface DataGridHeadNumericFormatObject extends DataGridHeadObject {
  type?: "NumericFormat";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  allowNegative?: boolean;
  decimalScale?: number;
}

export interface DataGridHeadPatternFormatObject extends DataGridHeadObject {
  type?: "PatternFormat";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  format: string;
}

export interface DataGridHeadDateTimeObject extends DataGridHeadObject {
  type?: "DateTime";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
}

interface DataGridBodyObject {
  value?: string;
  label?: string;
}

interface DataGridPaginationObject {
  currentPage: number;
  totalCount: number;
  totalPages: number;
  pageSize: number;
}
