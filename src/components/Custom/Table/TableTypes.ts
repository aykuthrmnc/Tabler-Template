import { HTMLInputTypeAttribute, ReactNode } from "react";

//! TABLE
export interface TableObject {
  title?: string;
  head: (
    | TableHeadObject
    | TableHeadReactSelectObject
    | TableHeadReactSelectAsyncUrlObject
    | TableHeadNumericFormatObject
    | TableHeadPatternFormatObject
    | TableHeadDateTimeObject
  )[];
  body: (TableBodyObject | any)[];
  searchable?: boolean;
  asyncSearchable?: boolean;
  emptyMessage?: string;
  loading?: boolean;
  pagination?: TablePaginationObject;
  sizePerPageList?: {
    text: string;
    value: number;
  }[];
  inlineEditable?: boolean;
  creatable?: (e: any) => any;
  editable?: (e: any) => any;
  deletable?: (e: any) => any;
  isNotEditable?: (e: any) => boolean;
  isNotDeletable?: (e: any) => boolean;
  customFields?: {
    text: string;
    icon?: any;
    className?: string;
    onClick?: (e: any) => any;
    isHidden?: (e: any) => boolean;
  }[];
  children?: ReactNode;
  // [x: string]: any;
}

interface TableHeadObject {
  name: string;
  key: string;
  sortable?: boolean;
  width?: string;
  center?: boolean;
  type?: HTMLInputTypeAttribute | "PhoneInput";
  placeholder?: string;
  valueGetter?: (e: any) => any;
  editable?: boolean;
}

interface TableHeadReactSelectObject extends TableHeadObject {
  type?: "ReactSelect" | "ReactSelectAsync" | "ReactSelectCreatable" | "ReactSelectAsyncCreatable";
  onChange?: (e: any, item?: any) => any;
  isValidNewOption?: (e: any) => any;
  options?: any[] | any;
  submit?: boolean;
  reset?: boolean;
  valueGetter?: (e: any) => any;
  onCreateOption?: (e: any) => any;
}

interface TableHeadReactSelectAsyncUrlObject extends TableHeadObject {
  type?: "ReactSelectAsyncUrl";
  onChange?: (e: any, item?: any) => any;
  getOptionValues: (e: any) => any;
  isValidOptionsUrl?: (e: any) => any;
  optionsUrl: string | ((e: any) => any);
  submit?: boolean;
  reset?: boolean;
}

interface TableHeadNumericFormatObject {
  type?: "NumericFormat";
  key: string;
  onChange?: (e: any) => any;
  valueGetter?: (e: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  allowNegative?: boolean;
  decimalScale?: number;
}

interface TableHeadPatternFormatObject extends TableHeadObject {
  type?: "PatternFormat";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
  prefix?: string | ((e: any) => any);
  format: string;
}

interface TableHeadDateTimeObject extends TableHeadObject {
  type?: "DateTime";
  onChange?: (e: any, item?: any) => any;
  submit?: boolean;
  reset?: boolean;
}

interface TableBodyObject {
  value?: string;
  label?: string;
}

interface TablePaginationObject {
  currentPage: number;
  totalCount: number;
  totalPages: number;
  pageSize: number;
}
