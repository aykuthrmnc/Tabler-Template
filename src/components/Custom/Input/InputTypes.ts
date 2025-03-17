import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement } from "react";
import { DatetimepickerProps } from "react-datetime";
// import { Control as RHFControl } from "react-hook-form";
import { NumericFormatProps, PatternFormatProps } from "react-number-format";
import { Props as ReactSelectProps, StylesConfig } from "react-select";
import { AsyncProps as ReactSelectAsyncProps } from "react-select/async";
import { CreatableProps as ReactSelectCreatableProps } from "react-select/creatable";
import { AsyncCreatableProps as ReactSelectAsyncCreatableProps } from "react-select/async-creatable";
import { FormControlProps, FormSelectProps, FormCheckProps } from "react-bootstrap";
// import { Props as ReactPhoneNumberInputProps } from 'react-phone-number-input';
import { DropzoneProps } from "react-dropzone";
import { AxiosRequestConfig } from "axios";
import { DateRangePickerProps } from "@wojtekmaj/react-daterange-picker";

//! INPUT COMPONENT
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // as?: any;
  // id?: string;
  // name?: string;
  // label?: any;
  // type?: string;
  // className?: string;
  // classNameLabel?: string;
  // classNameContainer?: string;
  // placeholder?: string;
  // rows?: number;
  // disabled?: boolean | undefined;
  // required?: boolean;
  // endIcon?: boolean;
  // control?: RHFControl<any>;
  // register?: UseFormRegister<any>;
  // errors?: any;
  // hideErrorMessage?: boolean;
  // onChangeValue?: any;
  // [x: string]: any;
}

export interface InputControlProps extends FormControlProps {
  name?: string;
  label?: any;
  type?: HTMLInputTypeAttribute;
  classNameLabel?: string;
  classNameSearch?: string;
  classNamePassword?: string;
  classNameContainer?: string;
  required?: boolean;
  searchIcon?: any;
  showPasswordButton?: boolean;
  value?: any;
  onChange?: (e: any) => any;
  [x: string]: any;
}

export interface InputFloatingProps extends FormControlProps {
  name?: string;
  label: any;
  type?: HTMLInputTypeAttribute;
  classNameContainer?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputSelectProps extends FormSelectProps {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  // children: ReactNode;
  value?: any;
  onChange?: (e: any) => any;
  [x: string]: any;
}

export interface InputCheckProps extends FormCheckProps {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameTitle?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  title?: string | any;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputRangeProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  required?: boolean;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputReactSelectProps extends ReactSelectProps {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  value?: any;
  onChange?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
}

export interface InputReactSelectAsyncProps extends ReactSelectAsyncProps<any, any, any> {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  value?: any;
  onChange?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
}

export interface InputReactSelectCreatableProps extends ReactSelectCreatableProps<any, any, any> {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  value?: any;
  onChange?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
}

export interface InputReactSelectAsyncCreatableProps extends ReactSelectAsyncCreatableProps<any, any, any> {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  value?: any;
  onChange?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
}

export interface InputReactSelectAsyncUrlProps extends ReactSelectAsyncProps<any, any, any> {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  getOptionValues: (e: any) => any;
  optionsUrl: (e: string) => string | undefined;
  optionConfig?: (e: string) => AxiosRequestConfig;
  isValidOptionsUrl?: boolean | ((e: string) => boolean);
  value?: any;
  onChange?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
}

export interface InputNumericFormatProps extends NumericFormatProps {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputPatternFormatProps extends PatternFormatProps {
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputDatePickerProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  // disabled?: boolean;
  required?: boolean;
  min?: Date;
  max?: Date;
  showTimeSelect?: boolean;
  showMonthYearPicker?: boolean;
  value?: any;
  onChange?: (e: any) => any;
  // [x: string]: any;
}

export interface InputDateTimeProps extends DatetimepickerProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  dateFormat?: string;
  timeFormat?: string | boolean;
  dateChangeFormat?: string;
  value?: any;
  onChange?: (e: any) => any;
  // [x: string]: any;
}

export interface InputDateRangeProps extends DateRangePickerProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  required?: boolean;
  dateFormat?: string;
  dateChangeFormat?: string;
  value?: any;
  onChange?: (e: any) => any;
  // [x: string]: any;
}

export interface InputPhoneProps {
  id?: string;
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: any;
  onChange?: ((e: any) => any) | any;
  [x: string]: any;
}

export interface InputDropZoneProps extends DropzoneProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameFile?: string;
  classNameFileContainer?: string;
  classNameFileSubContainer?: string;
  placeholder?: any;
  required?: boolean;
  fileShowType?: "image" | "icon" | null;
  accept?: any;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputCounterProps {
  id?: string;
  name?: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  required?: boolean;
  initialValue?: number;
  min?: number;
  max?: number;
  value?: any;
  onChange?: (e: any) => any;
}

export interface InputCustomProps {
  as: ReactElement;
  id?: string;
  name?: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  required?: boolean;
  value?: any;
  onChange?: (e: any) => any;
}
