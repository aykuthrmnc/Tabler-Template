import { HTMLInputTypeAttribute, ReactNode } from "react";

//! TABLE
export interface TableObject {
  title?: string;
  className?: string;
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
  isAsync?: boolean;
  asyncSortable?: (e: { key: any; orderBy: "" | "asc" | "desc" | string }) => boolean;
  emptyMessage?: string;
  errorMessage?: string;
  isError?: boolean;
  loading?: boolean;
  pagination?: TablePaginationObject;
  sizePerPageList?: {
    text: string;
    value: number;
  }[];
  inlineEditable?: boolean;
  hideNoDataIcon?: boolean;
  noDataIcon?: ReactNode;
  createIcon?: ReactNode;
  editIcon?: ReactNode;
  deleteIcon?: ReactNode;
  creatable?: (e: any) => any;
  editable?: (e: any) => any;
  deletable?: (e: any) => any;
  isNotEditable?: (e: any) => boolean;
  isNotDeletable?: (e: any) => boolean;
  customFields?: {
    header?: string;
    text?: ((e: any) => any) | string;
    icon?: ((e: any) => any) | any;
    center?: boolean;
    className?: string;
    onClick?: (e: any) => any;
    isHidden?: (e: any) => boolean;
  }[];
  initialValues?: {
    sorting?: {
      key: string;
      orderBy: string;
    };
  };
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
  totalCount?: number;
  totalPages: number;
  pageSize?: number;
}
