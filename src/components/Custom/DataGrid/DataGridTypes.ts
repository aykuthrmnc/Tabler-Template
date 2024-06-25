import { HTMLInputTypeAttribute, ReactNode } from "react";

//! DATAGRID
export interface DataGridObject {
  title?: string;
  className?: string;
  head: (
    | DataGridHeadObject
    | DataGridHeadReactSelectObject
    | DataGridHeadReactSelectAsyncUrlObject
    | DataGridHeadNumericFormatObject
    | DataGridHeadPatternFormatObject
    | DataGridHeadDateTimeObject
  )[];
  body: (DataGridBodyObject | any)[];
  searchable?: boolean;
  isAsync?: boolean;
  emptyMessage?: string;
  errorMessage?: string;
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
  createIcon?: ReactNode;
  deleteIcon?: ReactNode;
  creatable?: boolean | ((e: any) => any);
  editable?: boolean | ((e: any) => any);
  deletable?: boolean | ((e: any) => any);
  getValues?: (e: any) => any;
  form?: any;
  customFields?: {
    header?: string;
    text?: string;
    icon?: any;
    className?: string;
    onClick?: (e: any) => any;
  }[];
  // children?: ReactNode;
  // [x: string]: any;
}

interface DataGridHeadObject {
  name: string;
  key: string;
  sortable?: boolean;
  width?: string;
  center?: boolean;
  type?: HTMLInputTypeAttribute | "PhoneInput";
  placeholder?: string;
  valueGetter?: (e: any) => any;
}

interface DataGridHeadReactSelectObject extends DataGridHeadObject {
  type?: "ReactSelect" | "ReactSelectAsync" | "ReactSelectCreatable" | "ReactSelectAsyncCreatable";
  onChange?: (e: any, item?: any) => any;
  isValidNewOption?: (e: any) => any;
  options?: any[] | any;
  submit?: boolean;
  reset?: boolean;
  onCreateOption?: (e: any) => any;
}

interface DataGridHeadReactSelectAsyncUrlObject extends DataGridHeadObject {
  type?: "ReactSelectAsyncUrl";
  onChange?: (e: any, item?: any) => any;
  getOptionValues: (e: any) => any;
  isValidOptionsUrl?: (e: any) => any;
  optionsUrl: string | ((e: any) => any);
  submit?: boolean;
  reset?: boolean;
}

interface DataGridHeadNumericFormatObject extends DataGridHeadObject {
  type?: "NumericFormat";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  allowNegative?: boolean;
  decimalScale?: number;
}

interface DataGridHeadPatternFormatObject extends DataGridHeadObject {
  type?: "PatternFormat";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  format: string;
}

interface DataGridHeadDateTimeObject extends DataGridHeadObject {
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
