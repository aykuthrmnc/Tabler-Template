import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { DatetimepickerProps } from "react-datetime";
// import { Control as RHFControl } from "react-hook-form";
import { NumericFormatProps, PatternFormatProps } from "react-number-format";
import { Props as ReactSelectProps, StylesConfig } from "react-select";
import { AsyncProps as ReactSelectAsyncProps } from "react-select/async";
import { CreatableProps as ReactSelectCreatableProps } from "react-select/creatable";
import { AsyncCreatableProps as ReactSelectAsyncCreatableProps } from "react-select/async-creatable";
import { FormControlProps, FormSelectProps, FormCheckProps } from "react-bootstrap";
// import { Props as ReactPhoneNumberInputProps } from 'react-phone-number-input';
import { Control, UseFormRegister } from "react-hook-form";
import { DropzoneProps } from "react-dropzone";
import { AxiosRequestConfig } from "axios";
import { DateRangePickerProps } from "@wojtekmaj/react-daterange-picker";
import { TimePickerProps } from "rc-time-picker";
import { TFunction } from "i18next";

//! REACT HOOK FORM INPUT COMPONENT
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // as?: any;
  // id?: string;
  // name: string;
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

export interface FormInputControlProps extends FormControlProps {
  name: string;
  label?: any;
  type?: HTMLInputTypeAttribute;
  classNameLabel?: string;
  classNameSearch?: string;
  classNamePassword?: string;
  classNameContainer?: string;
  required?: boolean;
  searchIcon?: any;
  showPasswordButton?: boolean;
  control?: Control<any, any>;
  onChangeValue?: (e: any) => any;
  hideErrorMessage?: boolean;
  t?: ((x: string) => string) | TFunction;
  [x: string]: any;
}

export interface FormInputFloatingProps extends FormControlProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  label: any;
  placeholder?: string;
  classNameContainer?: string;
  control?: Control<any, any>;
  onChangeValue?: (e: any) => any;
  hideErrorMessage?: boolean;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputSelectProps extends FormSelectProps {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  control?: Control<any, any>;
  onChangeValue?: (e: any) => any;
  hideErrorMessage?: boolean;
  // children: React.ReactNode;
  t?: ((x: string) => string) | TFunction;
  [x: string]: any;
}

export interface FormInputCheckProps extends FormCheckProps {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameTitle?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  title?: string | any;
  register?: UseFormRegister<any>;
  errors?: any;
  // control?: Control<any, any>;
  // value?: any;
  onChangeValue?: (e: any) => any;
  hideErrorMessage?: boolean;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputRangeProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  disabled?: boolean;
  required?: boolean;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  control?: Control<any, any>;
  onChangeValue?: (e: any) => any;
  hideErrorMessage?: boolean;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputReactSelectProps extends ReactSelectProps {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputReactSelectAsyncProps extends ReactSelectAsyncProps<any, any, any> {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputReactSelectCreatableProps extends ReactSelectCreatableProps<any, any, any> {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputReactSelectAsyncCreatableProps extends ReactSelectAsyncCreatableProps<any, any, any> {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  options?: any;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputReactSelectAsyncUrlProps extends ReactSelectAsyncProps<any, any, any> {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  getOptionValues: (e: any) => any;
  optionsUrl: (e: string) => string;
  optionConfig?: (e: string) => AxiosRequestConfig;
  isValidOptionsUrl?: boolean | ((e: string) => boolean);
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  baseStyles?: StylesConfig<any, any, any>;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputNumericFormatProps extends NumericFormatProps {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputPatternFormatProps extends PatternFormatProps {
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputDatePickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  // disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  min?: Date;
  max?: Date;
  showTimeSelect?: boolean;
  showMonthYearPicker?: boolean;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
  // [x: string]: any;
}

export interface FormInputDateTimeProps extends DatetimepickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  dateFormat?: string;
  timeFormat?: string | boolean;
  dateChangeFormat?: string;
  t?: ((x: string) => string) | TFunction;
  // [x: string]: any;
}

export interface FormInputDateRangeProps extends DateRangePickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  dateFormat?: string;
  dateChangeFormat?: string;
  t?: ((x: string) => string) | TFunction;
  // [x: string]: any;
}

export interface FormInputTimePickerProps extends TimePickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  // placeholder?: string;
  // disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  timeFormat?: string;
  timeChangeFormat?: string;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
  // [x: string]: any;
}

export interface FormInputPhoneProps {
  id?: string;
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
  [x: string]: any;
}

export interface FormInputDropZoneProps extends DropzoneProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameFile?: string;
  classNameFileContainer?: string;
  classNameFileSubContainer?: string;
  placeholder?: string;
  required?: boolean;
  fileShowType?: "image" | "icon" | null;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputCounterProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  classNameSubContainer?: string;
  disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  initialValue?: number;
  format?: (e: any) => string;
  min?: number;
  max?: number;
  t?: ((x: string) => string) | TFunction;
}

export interface FormInputCustomProps {
  as: React.ReactElement;
  id?: string;
  name: string;
  label?: any;
  classNameLabel?: string;
  classNameContainer?: string;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
  [x: string]: any;
}

export interface FormInputTimePickerProps extends TimePickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  // placeholder?: string;
  // disabled?: boolean;
  required?: boolean;
  control?: Control<any, any>;
  hideErrorMessage?: boolean;
  timeFormat?: string;
  timeChangeFormat?: string;
  onChangeValue?: (e: any) => any;
  t?: ((x: string) => string) | TFunction;
  // [x: string]: any;
}
