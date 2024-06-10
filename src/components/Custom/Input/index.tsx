import { cloneElement, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import BaseReactSelect, { StylesConfig } from "react-select";
import BaseReactSelectAsync from "react-select/async";
import BaseReactSelectCreatable from "react-select/creatable";
import BaseReactSelectAsyncCreatable from "react-select/async-creatable";
import BaseReactDatePicker from "react-datepicker";
import BaseReactDatetime from "react-datetime";
import BaseReactDropzone from "react-dropzone";
import BasePhoneInput from "react-phone-number-input";
import phoneInputTr from "react-phone-number-input/locale/tr.json";
import "moment/dist/locale/tr";
import moment from "moment";
import classNames from "classnames";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { NumericFormat as BaseNumericFormat, PatternFormat as BasePatternFormat } from "react-number-format";
import {
  InputFloatingProps,
  InputControlProps,
  InputProps,
  InputSelectProps,
  InputCheckProps,
  InputRangeProps,
  InputReactSelectProps,
  InputReactSelectAsyncProps,
  InputReactSelectCreatableProps,
  InputReactSelectAsyncCreatableProps,
  InputDateTimeProps,
  InputPhoneProps,
  InputDropZoneProps,
  InputCounterProps,
  InputNumericFormatProps,
  InputDatePickerProps,
  InputReactSelectAsyncUrlProps,
  InputPatternFormatProps,
  InputCustomProps,
} from "./InputTypes";
import axios from "axios";

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

const Input = ({ children }: InputProps) => children;

const Control = ({
  as,
  id,
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
  value,
  onChange,
  ...props
}: InputControlProps) => {
  const [inputType, setInputType] = useState(type);

  return (
    <Form.Group className={classNameContainer}>
      {label && (
        <Form.Label className={classNameLabel} htmlFor={id}>
          {label} {required && <span className="text-danger">*</span>}
        </Form.Label>
      )}
      <div className="position-relative h-100">
        {type === "search" && (
          <div
            className={classNames(
              classNameSearch,
              "pe-none position-absolute top-0 bottom-0 d-flex align-items-center ps-2",
            )}
          >
            {searchIcon ?? <FaSearch />}
          </div>
        )}
        <Form.Control
          as={as}
          id={id}
          type={inputType}
          className={classNames(className, {
            "ps-4": type === "search",
          })}
          style={{ paddingRight: showPasswordButton ? "2.5rem" : undefined }}
          value={value}
          onChange={(e: any) => {
            onChange?.(e.target.value);
          }}
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
    </Form.Group>
  );
};

const FloatingControl = ({
  as,
  id,
  label,
  type = "text",
  className,
  classNameContainer,
  placeholder = " ",
  value,
  onChange,
  ...props
}: InputFloatingProps) => (
  <>
    <FloatingLabel className={classNameContainer} label={label} controlId={id}>
      <Form.Control
        as={as}
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => {
          onChange?.(e.target.value);
        }}
        {...props}
      />
    </FloatingLabel>
  </>
);

const Select = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder,
  required,
  children,
  value,
  onChange,
  ...props
}: InputSelectProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <Form.Select
      id={id}
      className={className}
      value={value}
      onChange={(e: any) => {
        onChange?.(e.target.value);
      }}
      {...props}
    >
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {children}
    </Form.Select>
  </Form.Group>
);

const Check = ({
  id,
  label,
  className,
  classNameLabel,
  classNameTitle,
  classNameContainer,
  classNameSubContainer,
  required,
  type,
  title,
  value,
  onChange,
  ...props
}: InputCheckProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <Form.Check className={classNameSubContainer} type={type}>
      <Form.Check.Input
        id={id}
        type={type != "switch" ? type : undefined}
        className={className}
        value={value}
        onChange={(e: any) => {
          onChange?.(e.target.value);
        }}
        {...props}
      />
      {title && (
        <Form.Check.Label className={classNameTitle} htmlFor={id}>
          {title}
        </Form.Check.Label>
      )}
    </Form.Check>
  </Form.Group>
);

const Range = ({
  // min, max, step,
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  value,
  onChange,
  ...props
}: InputRangeProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <Form.Range
      id={id}
      className={className}
      value={value}
      onChange={(e: any) => {
        onChange?.(e.target.value);
      }}
      {...props}
    />
  </Form.Group>
);

const ReactSelect = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  value,
  onChange,
  ...props
}: InputReactSelectProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}

    <BaseReactSelect
      inputId={id}
      className={classNames(className, "react-select react-select-container")}
      classNamePrefix="react-select"
      placeholder={placeholder}
      noOptionsMessage={() => "Bulunamadı."}
      options={options}
      isMulti={isMulti}
      isClearable={isClearable}
      styles={baseStyles}
      value={value}
      onChange={onChange}
      {...props}
    />
  </Form.Group>
);

const ReactSelectAsync = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  value,
  onChange,
  ...props
}: InputReactSelectAsyncProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BaseReactSelectAsync
      inputId={id}
      className={classNames(className, "react-select react-select-container")}
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
      onChange={onChange}
      {...props}
    />
  </Form.Group>
);

const ReactSelectCreatable = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  value,
  onChange,
  ...props
}: InputReactSelectCreatableProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BaseReactSelectCreatable
      inputId={id}
      className={classNames(className, "react-select react-select-container")}
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
      onChange={onChange}
      {...props}
    />
  </Form.Group>
);

const ReactSelectAsyncCreatable = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  options,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  value,
  onChange,
  ...props
}: InputReactSelectAsyncCreatableProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BaseReactSelectAsyncCreatable
      inputId={id}
      className={classNames(className, "react-select react-select-container")}
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
      onChange={onChange}
      {...props}
    />
  </Form.Group>
);

const ReactSelectAsyncUrl = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  baseStyles = styles,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  getOptionValues,
  optionsUrl,
  optionConfig,
  isValidOptionsUrl = true,
  value,
  onChange,
  ...props
}: InputReactSelectAsyncUrlProps) => {
  let timeout: any = null;
  const fetchOptions = (e: any): any => {
    if (typeof isValidOptionsUrl == "boolean" ? isValidOptionsUrl : isValidOptionsUrl?.(e)) {
      return new Promise((resolve) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          axios(optionsUrl?.(e), { method: "get", ...optionConfig?.(e) })
            .then((res: any) => resolve(getOptionValues?.(res.data) || res.data))
            .catch(() => resolve([]));
        }, 700);
      });
    }
    return new Promise((resolve) => {
      resolve([]);
    });
  };

  return (
    <Form.Group className={classNameContainer}>
      {label && (
        <Form.Label className={classNameLabel} htmlFor={id}>
          {label} {required && <span className="text-danger">*</span>}
        </Form.Label>
      )}
      <BaseReactSelectAsync
        inputId={id}
        className={classNames(className, "react-select react-select-container", {})}
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
        onChange={onChange}
        {...props}
      />
    </Form.Group>
  );
};

const NumericFormat = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  value,
  onChange,
  ...props
}: InputNumericFormatProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BaseNumericFormat
      className={classNames(className, "form-control")}
      id={id}
      value={value}
      onValueChange={(e: any) => {
        onChange?.(e?.value);
      }}
      {...props}
    />
  </Form.Group>
);

const PatternFormat = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  required,
  value,
  onChange,
  ...props
}: InputPatternFormatProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BasePatternFormat
      className={classNames(className, "form-control")}
      id={id}
      // format={props.format}
      value={value}
      onValueChange={(e: any) => {
        onChange?.(e?.value);
      }}
      {...props}
    />
  </Form.Group>
);

const ReactDatePicker = ({
  id,
  label,
  // className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz",
  required,
  min,
  max,
  showTimeSelect,
  showMonthYearPicker,
  value,
  onChange,
  ...props
}: InputDatePickerProps) => (
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
      className={classNames("form-control")}
      // timeFormat="HH:mm"
      // timeIntervals={15}
      // timeCaption="time"
      dateFormat={showTimeSelect ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy"}
      id={id}
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
        onChange?.(e ? moment(e).format(showTimeSelect ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD") : null);
      }}
      {...props}
    />
  </Form.Group>
);

const DateTime = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  classNameSubContainer,
  placeholder = "Seçiniz",
  required,
  dateFormat = "DD.MM.YYYY",
  timeFormat = false,
  dateChangeFormat = "YYYY-MM-DD",
  value,
  onChange,
  ...props
}: InputDateTimeProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BaseReactDatetime
      className={classNameSubContainer}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      inputProps={{
        id,
        placeholder,
        className: classNames(className, "form-control"),
      }}
      locale="tr-TR"
      closeOnSelect
      value={value ? moment(value).format(timeFormat ? dateFormat + " " + timeFormat : dateFormat) : ""}
      onChange={(e: any) => {
        // onChange(typeof e == "object" ? moment(e).format(dateChangeFormat) : "");
        onChange?.(typeof e == "object" ? moment(e).format(dateChangeFormat) : "");
      }}
      {...props}
    />
  </Form.Group>
);

const PhoneInput = ({
  id,
  label,
  classNameLabel,
  classNameContainer,
  classNameSubContainer,
  required,
  value,
  onChange,
}: InputPhoneProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <BasePhoneInput
      labels={phoneInputTr}
      className={classNameSubContainer}
      inputComponent={Form.Control}
      id={id}
      defaultCountry="TR"
      value={value}
      onChange={onChange}
    />
  </Form.Group>
);

const ReactDropZone = ({
  id,
  label,
  className = "dropzone",
  classNameLabel,
  classNameContainer,
  classNameFile,
  required,
  multiple = false,
  acceptedFiles = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "image/webp": [".webp"],
  },
  value,
  onChange,
}: InputDropZoneProps) => (
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
        onChange?.(files.map((file: any) => Object.assign(file, { preview: URL.createObjectURL(file) })));
      }}
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
  </Form.Group>
);

const Counter = ({
  id,
  label,
  className,
  classNameLabel,
  classNameContainer,
  classNameSubContainer = "d-flex",
  required,
  min = 0,
  max = 99,
  value = 1,
  onChange,
}: InputCounterProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    <div className={classNameSubContainer}>
      <Button
        onClick={() => value > min && onChange?.(+value - 1)}
        className="d-flex align-items-center justify-content-center rounded-end-0"
      >
        <FaMinus size="12" />
      </Button>
      <div className={classNames("text-center py-2 px-3", className)} style={{ minWidth: "50px" }}>
        {value}
      </div>
      <Button
        onClick={() => value < max && onChange?.(+value + 1)}
        className="d-flex align-items-center justify-content-center rounded-start-0"
      >
        <FaPlus size="12" />
      </Button>
    </div>
  </Form.Group>
);

// USING WITH CUSTOM ELEMENT
const Custom = ({
  as,
  id,
  label,
  classNameLabel,
  classNameContainer,
  required,
  value,
  onChange,
  ...props
}: InputCustomProps) => (
  <Form.Group className={classNameContainer}>
    {label && (
      <Form.Label className={classNameLabel} htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
    )}
    {cloneElement(as, {
      id,
      value,
      onChange,
      ...props,
    })}
  </Form.Group>
);

Input.Control = Control;
Input.FloatingControl = FloatingControl;
Input.Select = Select;
Input.Check = Check;
Input.Range = Range;
Input.ReactSelect = ReactSelect;
Input.ReactSelectAsync = ReactSelectAsync;
Input.ReactSelectCreatable = ReactSelectCreatable;
Input.ReactSelectAsyncCreatable = ReactSelectAsyncCreatable;
Input.ReactSelectAsyncUrl = ReactSelectAsyncUrl;
Input.NumericFormat = NumericFormat;
Input.PatternFormat = PatternFormat;
Input.DatePicker = ReactDatePicker;
Input.DateTime = DateTime;
Input.PhoneInput = PhoneInput;
Input.ReactDropZone = ReactDropZone;
Input.Counter = Counter;
Input.Custom = Custom;

export default Input;
