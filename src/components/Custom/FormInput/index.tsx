import axios from "axios";
import "moment/dist/locale/tr";
import moment from "moment";
import classNames from "classnames";
import { cloneElement, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import BaseReactSelect, { StylesConfig } from "react-select";
import BaseReactSelectAsync from "react-select/async";
import BaseReactSelectCreatable from "react-select/creatable";
import BaseReactSelectAsyncCreatable from "react-select/async-creatable";
import BaseReactDatePicker from "react-datepicker";
import BaseReactDatetime from "react-datetime";
import BaseReactDropzone from "react-dropzone";
import BasePhoneInput from "react-phone-number-input";
import phoneInputTr from "react-phone-number-input/locale/tr.json";
import { TbEye, TbEyeClosed, TbPlus, TbMinus } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { NumericFormat as BaseNumericFormat, PatternFormat as BasePatternFormat } from "react-number-format";
import {
  FormInputFloatingProps,
  FormInputControlProps,
  FormInputProps,
  FormInputSelectProps,
  FormInputCheckProps,
  FormInputRangeProps,
  FormInputReactSelectProps,
  FormInputReactSelectAsyncProps,
  FormInputReactSelectCreatableProps,
  FormInputReactSelectAsyncCreatableProps,
  FormInputDateTimeProps,
  FormInputPhoneProps,
  FormInputDropZoneProps,
  FormInputCounterProps,
  FormInputNumericFormatProps,
  FormInputDatePickerProps,
  FormInputReactSelectAsyncUrlProps,
  FormInputPatternFormatProps,
  FormInputCustomProps,
} from "./FormInputTypes";

const styleProps = {
  color: "var(--tblr-body-color)",
  placeholderColor: "var(--tblr-gray-400)",
  backgroundColor: "var(--tblr-bg-forms)",
  borderColor: "var(--tblr-border-color)",
  borderFocusColor: "#90b5e2",
  borderWidth: "var(--tblr-border-width)",
  fontSize: "14px",
  primaryColor: "var(--tblr-primary)",
  primaryActiveColor: "rgba(var(--tblr-primary-rgb), .8)",
  secondaryColor: "#ccc",
  thirdColor: "#fff",
  paddingLeft: "0.75rem",
  paddingY: "0.5625rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
};

const styles: StylesConfig = {
  input: (base: any) => ({
    ...base,
    color: styleProps.color,
    paddingBlock: 0,
    margin: 0,
  }),
  placeholder: (base: any) => ({
    ...base,
    color: styleProps.placeholderColor,
  }),
  valueContainer: (base: any) => ({
    ...base,
    paddingInlineStart: styleProps.paddingLeft,
    paddingBlock: styleProps.paddingY,
  }),
  control: (base: any, { isFocused }: any) => ({
    ...base,
    color: styleProps.color,
    backgroundColor: styleProps.backgroundColor,
    fontSize: styleProps.fontSize,
    border: isFocused
      ? `${styleProps.borderWidth} solid ${styleProps.borderFocusColor}`
      : `${styleProps.borderWidth} solid ${styleProps.borderColor}`,
    "&:hover": {
      borderColor: undefined,
    },
    boxShadow: "none",
    transition: styleProps.transition,
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 99,
    fontSize: styleProps.fontSize,
    color: styleProps.color,
    backgroundColor: styleProps.backgroundColor,
    border: `${styleProps.borderWidth} solid ${styleProps.borderColor}`,
  }),
  option: (base: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...base,
    backgroundColor: isDisabled
      ? ""
      : isSelected
        ? styleProps.primaryColor
        : isFocused
          ? styleProps.primaryActiveColor
          : undefined,
    color: isDisabled
      ? styleProps.secondaryColor
      : isSelected
        ? styleProps.thirdColor
        : isFocused
          ? styleProps.thirdColor
          : undefined,
    cursor: isDisabled ? "not-allowed" : "default",
    ":active": {
      ...base[":active"],
      backgroundColor: !isDisabled ? (isSelected ? undefined : styleProps.primaryColor) : undefined,
      color: styleProps.thirdColor,
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    color: styleProps.color,
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "transparent",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: styleProps.thirdColor,
    backgroundColor: styleProps.primaryColor,
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: styleProps.thirdColor,
    backgroundColor: styleProps.primaryColor,
    ":hover": {
      backgroundColor: styleProps.primaryColor,
    },
  }),
  // indicatorSeparator: (base) => ({
  //   ...base,
  //   backgroundColor: "var(--bs-border-color)",
  // }),
  // clearIndicator: (base) => ({
  //   ...base,
  //   color: "var(--bs-border-color)",
  // }),
  // dropdownIndicator: (base) => ({
  //   ...base,
  //   color: "var(--bs-border-color)",
  // })
};

const FormInput = ({ children }: FormInputProps) => children;

const Control = ({
  as,
  id,
  name,
  label,
  type = "text",
  className,
  classNameLabel,
  classNameSearch,
  classNamePassword,
  classNameContainer,
  required,
  searchIcon,
  showPasswordButton = false,
  control,
  onChangeValue,
  hideErrorMessage,
  ...props
}: FormInputControlProps) => {
  const [inputType, setInputType] = useState(type);

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
        <Form.Group className={classNameContainer}>
          {label && (
            <Form.Label className={classNameLabel} htmlFor={id}>
              {label} {required && <span className="text-danger">*</span>}
            </Form.Label>
          )}
          <div className="position-relative h-100">
            {searchIcon && (
              <div
                className={classNameSearch ?? "pe-none position-absolute top-0 bottom-0 d-flex align-items-center ps-2"}
              >
                {searchIcon ?? <FaSearch />}
              </div>
            )}
            <Form.Control
              as={as}
              id={id}
              name={name}
              type={inputType}
              className={className}
              style={{
                paddingLeft: searchIcon ? "2.5rem" : undefined,
                paddingRight: showPasswordButton ? "2.5rem" : undefined,
              }}
              isInvalid={invalid}
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                onChangeValue?.(e.target.value);
              }}
              ref={ref}
              onBlur={onBlur}
              {...props}
            />
            {type === "password" && showPasswordButton && (
              <button
                type="button"
                title={inputType === "password" ? "Göster" : "Gizle"}
                onClick={() => setInputType(inputType === "password" ? "text" : "password")}
                // 'border-0 bg-transparent position-absolute top-0 bottom-0 end-0 d-flex align-items-center px-2 text-reset'
                className={classNames(
                  classNamePassword,
                  "position-absolute top-0 bottom-0 end-0 d-flex align-items-center border-0 bg-transparent link-secondary pe-3",
                )}
              >
                {inputType === "password" ? <TbEye size="20" /> : <TbEyeClosed size="20" />}
              </button>
            )}
          </div>

          {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
        </Form.Group>
      )}
    />
  );
};

const FloatingControl = ({
  as,
  id,
  name,
  label,
  type = "text",
  className,
  classNameContainer,
  placeholder = " ",
  control,
  onChangeValue,
  hideErrorMessage,
  ...props
}: FormInputFloatingProps) => (
  <Controller
    control={control}
    defaultValue=""
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <>
        <FloatingLabel className={classNameContainer} label={label} controlId={id}>
          <Form.Control
            as={as}
            id={id}
            name={name}
            type={type}
            className={className}
            placeholder={placeholder}
            isInvalid={invalid}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              onChangeValue?.(e.target.value);
            }}
            ref={ref}
            onBlur={onBlur}
            {...props}
          />
        </FloatingLabel>
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </>
    )}
  />
);

const Select = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder,
  required,
  control,
  onChangeValue,
  hideErrorMessage,
  children,
  ...props
}: FormInputSelectProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <Form.Select
          id={id}
          name={name}
          className={className}
          isInvalid={invalid}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            onChangeValue?.(e.target.value);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        >
          {placeholder && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
          {children}
        </Form.Select>

        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const Check = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameTitle,
  classNameContainer,
  classNameSubContainer,
  required,
  type,
  title,
  register,
  errors,
  hideErrorMessage,
  ...props
}: FormInputCheckProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <Form.Check className={classNameSubContainer} type={type}>
      <Form.Check.Input
        id={id}
        name={name}
        type={type != "switch" ? type : undefined}
        className={className}
        isInvalid={errors?.[name] ? true : false}
        {...(name &&
          register?.(name, {
            /* FOR BOOLEAN VALUE */
          }))}
        {...props}
      />
      {title && (
        <Form.Check.Label className={classNameTitle} htmlFor={id}>
          {title}
        </Form.Check.Label>
      )}
      {!hideErrorMessage && errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>}
        />
      )}
    </Form.Check>
  </Form.Group>
);

const Range = ({
  // min, max, step,
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  control,
  onChangeValue,
  hideErrorMessage,
  ...props
}: FormInputRangeProps) => (
  <Controller
    control={control}
    defaultValue=""
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <Form.Range
          id={id}
          name={name}
          className={className}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            onChangeValue?.(e.target.value);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />

        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactSelect = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  control,
  hideErrorMessage,
  onChangeValue,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  ...props
}: FormInputReactSelectProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}

        <BaseReactSelect
          inputId={id}
          className={classNames(className, "react-select react-select-container", {
            "is-invalid": invalid,
          })}
          classNamePrefix="react-select"
          placeholder={placeholder}
          noOptionsMessage={() => "Bulunamadı."}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          styles={baseStyles}
          value={value}
          onChange={(e) => {
            onChange(e);
            onChangeValue?.(e);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactSelectAsync = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  control,
  hideErrorMessage,
  onChangeValue,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: FormInputReactSelectAsyncProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactSelectAsync
          inputId={id}
          className={classNames(className, "react-select react-select-container", {
            "is-invalid": invalid,
          })}
          classNamePrefix="react-select"
          placeholder={placeholder}
          noOptionsMessage={() => "Bulunamadı."}
          loadOptions={options}
          isMulti={isMulti}
          isClearable={isClearable}
          // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
          // escapeClearsValue
          cacheOptions
          defaultOptions
          loadingMessage={() => "Yükleniyor..."}
          isLoading={isLoading}
          styles={baseStyles}
          value={value}
          onChange={(e) => {
            onChange(e);
            onChangeValue?.(e);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactSelectCreatable = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  control,
  hideErrorMessage,
  onChangeValue,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: FormInputReactSelectCreatableProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactSelectCreatable
          inputId={id}
          className={classNames(className, "react-select react-select-container", {
            "is-invalid": invalid,
          })}
          classNamePrefix="react-select"
          placeholder={placeholder}
          noOptionsMessage={() => "Bulunamadı."}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          formatCreateLabel={(e: any) => e + " oluştur"}
          onCreateOption={props.onCreateOption}
          loadingMessage={() => "Yükleniyor..."}
          isLoading={isLoading}
          styles={baseStyles}
          value={value}
          onChange={(e) => {
            onChange(e);
            onChangeValue?.(e);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactSelectAsyncCreatable = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  control,
  hideErrorMessage,
  onChangeValue,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: FormInputReactSelectAsyncCreatableProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactSelectAsyncCreatable
          inputId={id}
          className={classNames(className, "react-select react-select-container", {
            "is-invalid": invalid,
          })}
          classNamePrefix="react-select"
          placeholder={placeholder}
          noOptionsMessage={() => "Bulunamadı."}
          loadOptions={options}
          isMulti={isMulti}
          isClearable={isClearable}
          cacheOptions
          defaultOptions
          loadingMessage={() => "Yükleniyor..."}
          isLoading={isLoading}
          formatCreateLabel={(e: any) => e + " oluştur"}
          onCreateOption={props.onCreateOption}
          styles={baseStyles}
          value={value}
          onChange={(e) => {
            onChange(e);
            onChangeValue?.(e);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactSelectAsyncUrl = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  control,
  hideErrorMessage,
  onChangeValue,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  getOptionValues,
  optionsUrl,
  optionConfig,
  isValidOptionsUrl = true,
  ...props
}: FormInputReactSelectAsyncUrlProps) => {
  let timeout: any = null;
  const fetchOptions = (e: any): any => {
    if (typeof isValidOptionsUrl == "boolean" ? isValidOptionsUrl : isValidOptionsUrl?.(e)) {
      return new Promise((resolve) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          axios(optionsUrl?.(e), { method: "get", ...optionConfig?.(e) }).then((res: any) =>
            resolve(getOptionValues?.(res.data) || res.data),
          );
        }, 700);
      });
    }
    return new Promise((resolve) => {
      resolve([]);
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
        <Form.Group className={classNameContainer}>
          {label && (
            <Form.Label className={classNameLabel} htmlFor={id}>
              {label} {required && <span className="text-danger">*</span>}
            </Form.Label>
          )}
          <BaseReactSelectAsync
            inputId={id}
            className={classNames(className, "react-select react-select-container", {
              "is-invalid": invalid,
            })}
            classNamePrefix="react-select"
            placeholder={placeholder}
            noOptionsMessage={() => "Bulunamadı."}
            loadOptions={fetchOptions}
            isMulti={isMulti}
            isClearable={isClearable}
            // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
            // escapeClearsValue
            cacheOptions
            defaultOptions
            loadingMessage={() => "Yükleniyor..."}
            isLoading={isLoading}
            styles={baseStyles}
            value={value}
            onChange={(e) => {
              onChange(e);
              onChangeValue?.(e);
            }}
            ref={ref}
            onBlur={onBlur}
            {...props}
          />
          {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
        </Form.Group>
      )}
    />
  );
};

const NumericFormat = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  control,
  hideErrorMessage,
  onChangeValue,
  ...props
}: FormInputNumericFormatProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseNumericFormat
          className={classNames(className, "form-control", {
            "is-invalid": invalid,
          })}
          id={id}
          name={name}
          value={value}
          onValueChange={(e: any) => {
            onChange(e?.value);
            onChangeValue?.(e?.value);
          }}
          getInputRef={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const PatternFormat = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  control,
  hideErrorMessage,
  onChangeValue,
  ...props
}: FormInputPatternFormatProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BasePatternFormat
          className={classNames(className, "form-control", {
            "is-invalid": invalid,
          })}
          id={id}
          name={name}
          // format={props.format}
          value={value}
          onValueChange={(e: any) => {
            onChange(e?.value);
            onChangeValue?.(e?.value);
          }}
          getInputRef={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactDatePicker = ({
  id,
  name,
  label,
  // className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  control,
  hideErrorMessage,
  min,
  max,
  showTimeSelect,
  showMonthYearPicker,
  onChangeValue,
  ...props
}: FormInputDatePickerProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactDatePicker
          autoComplete="off"
          placeholderText={placeholder}
          wrapperClassName="d-block"
          className={classNames("form-control", {
            "is-invalid": invalid,
          })}
          // timeFormat="HH:mm"
          // timeIntervals={15}
          // timeCaption="time"
          dateFormat={showTimeSelect ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy"}
          id={id}
          name={name}
          showYearDropdown
          showMonthDropdown
          popperPlacement="bottom"
          // disabledKeyboardNavigation
          isClearable
          // locale={tr}
          minDate={min ? new Date(min) : null}
          maxDate={max ? new Date(max) : null}
          showTimeSelect={showTimeSelect}
          showMonthYearPicker={showMonthYearPicker}
          // value={value}
          selected={value ? new Date(value) : null}
          onChange={(e: any) => {
            onChange(e ? moment(e).format(showTimeSelect ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD") : null);
            if (onChangeValue)
              onChangeValue(e ? moment(e).format(showTimeSelect ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD") : null);
          }}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const DateTime = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  classNameSubContainer,
  placeholder = "Seçiniz",
  required,
  control,
  hideErrorMessage,
  onChangeValue,
  dateFormat = "DD.MM.YYYY",
  timeFormat = false,
  dateChangeFormat = "YYYY-MM-DD",
  ...props
}: FormInputDateTimeProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactDatetime
          className={classNames(classNameSubContainer, {
            "is-invalid": invalid,
          })}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          inputProps={{
            id,
            placeholder,
            className: classNames(className, "form-control", {
              "is-invalid": invalid,
            }),
            onBlur,
          }}
          locale="tr-TR"
          closeOnSelect
          value={value ? moment(value).format(timeFormat ? dateFormat + " " + timeFormat : dateFormat) : ""}
          onChange={(e: any) => {
            onChange(typeof e == "object" ? moment(e).format(dateChangeFormat) : "");
            onChangeValue?.(typeof e == "object" ? moment(e).format(dateChangeFormat) : "");
          }}
          ref={ref}
          {...props}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const PhoneInput = ({
  id,
  name,
  label,
  classNameLabel,
  classNameContainer,
  classNameSubContainer,
  required,
  control,
  hideErrorMessage,
  onChangeValue,
}: FormInputPhoneProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { invalid, error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BasePhoneInput
          labels={phoneInputTr}
          className={classNames(classNameSubContainer, {
            "is-invalid": invalid,
          })}
          inputComponent={Form.Control}
          id={id}
          name={name}
          defaultCountry="TR"
          value={value}
          onChange={(e: any) => {
            onChange(e);
            onChangeValue?.(e);
          }}
          ref={ref}
          onBlur={onBlur}
        />
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const ReactDropZone = ({
  id,
  name,
  label,
  className = "dropzone",
  classNameLabel,
  classNameContainer,
  classNameFile,
  required,
  control,
  hideErrorMessage,
  multiple = false,
  acceptedFiles = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "image/webp": [".webp"],
  },
}: FormInputDropZoneProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <BaseReactDropzone
          multiple={multiple}
          accept={acceptedFiles}
          onDrop={(files: any) => {
            onChange(files.map((file: any) => Object.assign(file, { preview: URL.createObjectURL(file) })));
          }}
          ref={ref}
        >
          {({ getRootProps, getInputProps, isFocused, isDragAccept, isDragReject }) => (
            <div
              {...getRootProps({
                className: classNames(className, {
                  isFocused: isFocused,
                  isAccept: isDragAccept,
                  isReject: isDragReject,
                }),
              })}
            >
              <input {...getInputProps({ id })} />
              {value?.length ? (
                <>
                  <aside className="dropzone-showcase">
                    {value?.map((file: any, key: number) => (
                      <div className="dropzone-showcase-item" key={key}>
                        <img
                          alt={file.name}
                          src={file.preview}
                          className={classNameFile}
                          onLoad={() => URL.revokeObjectURL(file.preview)}
                        />
                      </div>
                    ))}
                  </aside>
                  {value.length > 1 && <div>{value.length} dosya eklendi.</div>}
                </>
              ) : (
                <div>Dosyaları Seçin veya Sürükleyin</div>
              )}
            </div>
          )}
        </BaseReactDropzone>
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

const Counter = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  classNameSubContainer = "d-flex",
  required,
  control,
  hideErrorMessage,
  initialValue = 1,
  format,
  min = 0,
  max = 99,
  disabled,
}: FormInputCounterProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value = initialValue }, fieldState: { error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        <div className={classNameSubContainer}>
          <Button
            onClick={() => value > min && onChange(+value - 1)}
            className="d-flex align-items-center justify-content-center rounded-end-0"
            disabled={disabled}
          >
            <TbMinus size="12" />
          </Button>
          <div className={classNames("text-center py-2 px-3", className)} style={{ minWidth: "50px" }}>
            {format?.(value) || value}
          </div>
          <Button
            onClick={() => value < max && onChange(+value + 1)}
            className="d-flex align-items-center justify-content-center rounded-start-0"
            disabled={disabled}
          >
            <TbPlus size="12" />
          </Button>
        </div>
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

// USING WITH CUSTOM ELEMENT
const Custom = ({
  as,
  id,
  name,
  label,
  classNameLabel,
  classNameContainer,
  required,
  control,
  hideErrorMessage,
  onChangeValue,
  ...props
}: FormInputCustomProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, ref, value }, fieldState: { error } }) => (
      <Form.Group className={classNameContainer}>
        {label && (
          <Form.Label className={classNameLabel} htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Form.Label>
        )}
        {cloneElement(as, {
          id,
          value,
          onChange: (e: any) => {
            onChange(e);
            onChangeValue?.(e);
          },
          ref,
          onBlur,
          ...props,
        })}
        {!hideErrorMessage && error && <div className="d-block invalid-feedback">{error?.message}</div>}
      </Form.Group>
    )}
  />
);

FormInput.Control = Control;
FormInput.FloatingControl = FloatingControl;
FormInput.Select = Select;
FormInput.Check = Check;
FormInput.Range = Range;
FormInput.ReactSelect = ReactSelect;
FormInput.ReactSelectAsync = ReactSelectAsync;
FormInput.ReactSelectCreatable = ReactSelectCreatable;
FormInput.ReactSelectAsyncCreatable = ReactSelectAsyncCreatable;
FormInput.ReactSelectAsyncUrl = ReactSelectAsyncUrl;
FormInput.NumericFormat = NumericFormat;
FormInput.PatternFormat = PatternFormat;
FormInput.DatePicker = ReactDatePicker;
FormInput.DateTime = DateTime;
FormInput.PhoneInput = PhoneInput;
FormInput.ReactDropZone = ReactDropZone;
FormInput.Counter = Counter;
FormInput.Custom = Custom;

export default FormInput;

// const RegisterControl = ({
//   as,
//   id,
//   name,
//   label,
//   type = "text",
//   className,
//   classNameLabel,
//   classNameSearch,
//   classNamePassword,
//   classNameContainer,
//   required,
//   searchIcon,
//   showPasswordButton = false,
//   register,
//   errors,
//   hideErrorMessage,
//   ...props
// }: FormInputControlProps) => {
//   const [inputType, setInputType] = useState(type);

//   return (
//     <Form.Group className={classNameContainer}>
//       {label && (
//         <Form.Label className={classNameLabel} htmlFor={id}>
//           {label} {required && <span className="text-danger">*</span>}
//         </Form.Label>
//       )}
//       <div className="position-relative h-100">
//         {type === "search" && (
//           <div className={classNames(classNameSearch, "pe-none position-absolute top-0 bottom-0 d-flex align-items-center ps-2")}>
//             {searchIcon ?? <FaSearch />}
//           </div>
//         )}
//         <Form.Control
//           as={as}
//           id={id}
//           name={name}
//           type={inputType}
//           className={classNames(className, {
//             "ps-4": type === "search",
//           })}
//           style={{ paddingRight: showPasswordButton ? "2.5rem" : undefined }}
//           isInvalid={name.includes(".") ? name.split(".").reduce((x, y) => x?.[y], errors) : errors?.[name] ? true : false}
//           {...(name && register?.(name))}
//           {...props}
//         />
//         {type === "password" && showPasswordButton && (
//           <button
//             type="button"
//             title={inputType === "password" ? "Göster" : "Gizle"}
//             onClick={() => setInputType(inputType === "password" ? "text" : "password")}
//             // 'border-0 bg-transparent position-absolute top-0 bottom-0 end-0 d-flex align-items-center px-2 text-reset'
//             className={classNames(
//               classNamePassword,
//               "position-absolute top-0 bottom-0 end-0 d-flex align-items-center border-0 bg-transparent link-secondary pe-3"
//             )}
//           >
//             {inputType === "password" ? <TbEye size="20" /> : <TbEyeClosed size="20" />}
//           </button>
//         )}
//       </div>

//       {!hideErrorMessage && errors && (
//         <ErrorMessage errors={errors} name={name} render={({ message }: any) => <div className="d-block invalid-feedback">{message}</div>} />
//       )}
//     </Form.Group>
//   );
// };
