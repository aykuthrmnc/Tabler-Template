import { createContext, createElement, Fragment, ReactNode, useContext, useEffect, useState } from "react";
import { FaSort, FaSortDown, FaSortUp, FaTrash } from "react-icons/fa6";
import { Spinner, Table as RSTable, Form, Button, Dropdown, ButtonProps, FormControlProps } from "react-bootstrap";
import classNames from "classnames";
import { FieldValues, useFieldArray, useForm, UseFormProps } from "react-hook-form";
import FormInput from "../FormInput";
import { useQueryParams } from "~/hooks";
import NoData from "../NoData";
import "./DataGrid.scss";
import { StylesConfig } from "react-select";
import DynaPagination from "../Pagination";
import { DataGridHeadType } from "./DataGridTypes";

const styleProps = {
  color: "var(--tblr-body-color)",
  placeholderColor: "var(--tblr-gray-400)",
  backgroundColor: "var(--tblr-bg-forms)",
  borderColor: "var(--tblr-border-color)",
  borderFocusColor: "#90b5e2",
  borderWidth: "var(--tblr-border-width, 1px)",
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
    border: isFocused ? `${styleProps.borderWidth} solid ${styleProps.borderFocusColor}` : "none",
    "&:hover": {
      borderColor: `${styleProps.borderColor}`,
    },
    borderRadius: "none",
    boxShadow: "none",
    height: "100%",
    transition: styleProps.transition,
  }),
  container: (base: any) => ({
    ...base,
    height: "100%",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 99,
    fontSize: styleProps.fontSize,
    color: styleProps.color,
    backgroundColor: styleProps.backgroundColor,
    border: `${styleProps.borderWidth} solid ${styleProps.borderColor}`,
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  option: (base: any, { isDisabled, isFocused, isSelected }: any) => {
    return {
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
    };
  },
  singleValue: (base: any) => ({
    ...base,
    color: styleProps.color,
  }),
  multiValue: (base: any) => {
    return {
      ...base,
      backgroundColor: "transparent",
    };
  },
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

const DataGridContext = createContext<any>({});

const DataGrid = ({
  as = Fragment,
  children,
  columns,
  name = "array",
  emptyMessage = "Gösterilecek veri bulunmamaktadır.",
  isError = false,
  error,
  loading = false,
  hideNoDataIcon,
  noDataIcon,
  deleteIcon,
  deletable,
  customFields,
  onChange,
  form,
  ...props
}: {
  as?: any;
  children: any;
  columns: DataGridHeadType[];
  form?: UseFormProps<FieldValues>;
  name?: string;
  emptyMessage?: string;
  isError?: boolean;
  error?: any;
  loading?: boolean;
  hideNoDataIcon?: boolean;
  noDataIcon?: ReactNode;
  deleteIcon?: ReactNode;
  deletable?: boolean | ((e: any) => any);
  onChange?: (e: any) => any;
  customFields?: {
    header?: string;
    text?: string;
    icon?: any;
    center?: boolean;
    className?: string;
    onClick?: (e: any) => any;
  }[];
}) => {
  const { control, watch } = useForm(form);

  const { fields, append, update, remove } = useFieldArray({
    control,
    name,
  });

  const handleRowChange = (rowIndex: number, value: any) => {
    update(rowIndex, value);
  };

  const handleRowDelete = (rowIndex: number) => {
    remove(rowIndex);
  };

  const handleRowAdd = () => {
    const newRow = columns.reduce((acc: any, column) => {
      acc[column?.key] = ""; // Boş değerlerle yeni bir satır oluştur
      return acc;
    }, {});
    append(newRow);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      onChange?.([...value?.[name]]);
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const data = {
    name,
    control,
    handleRowChange,
    handleRowDelete,
    handleRowAdd,
    columns,
    customFields,
    deletable,
    loading,
    isError,
    error,
    fields,
    hideNoDataIcon,
    noDataIcon,
    emptyMessage,
    deleteIcon,
  };

  return createElement(as, props, <DataGridContext.Provider value={data}>{children}</DataGridContext.Provider>);
};

const Table = () => {
  const {
    name,
    control,
    handleRowChange,
    handleRowDelete,
    columns,
    customFields,
    deletable,
    loading,
    isError,
    error,
    fields,
    hideNoDataIcon,
    noDataIcon,
    emptyMessage,
    deleteIcon,
  } = useContext(DataGridContext);
  const [sorting, setSorting]: any = useState("");

  //! COMPONENT BUILDER
  const componentMap = (item: any, data?: any, index?: any) => {
    const key = `${name}.${index}.${item?.key}`;

    // if (React.isValidElement(item?.type)) {
    //   return (
    //     <FormInput.Custom
    //       as={item?.type}
    //       key={data.id}
    //       name={key}
    //       control={control}
    //       classNameContainer="h-100"
    //     />
    //   );
    // }

    switch (item?.type) {
      case "ReactSelect":
        return (
          <FormInput.ReactSelect
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="h-100"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            formatOptionLabel={item?.formatOptionLabel}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "ReactSelectAsync":
        return (
          <FormInput.ReactSelectAsync
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="h-100"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "ReactSelectCreatable":
        return (
          <FormInput.ReactSelectCreatable
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="h-100"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "ReactSelectAsyncCreatable":
        return (
          <FormInput.ReactSelectAsyncCreatable
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="h-100"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            onCreateOption={async (e: any) => {
              const resetValue = await item?.onCreateOption?.(e);
              item?.onCreateOption && handleRowChange(index, resetValue);
            }}
            isValidNewOption={item?.isValidNewOption}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "ReactSelectAsyncUrl":
        return (
          <FormInput.ReactSelectAsyncUrl
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="h-100"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            optionsUrl={item?.optionsUrl}
            optionConfig={item?.optionConfig}
            getOptionValues={item?.getOptionValues}
            isValidOptionsUrl={item?.isValidOptionsUrl}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "NumericFormat":
        return (
          <FormInput.NumericFormat
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="h-100"
            prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            allowNegative={item?.allowNegative}
            decimalScale={item?.decimalScale}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "PatternFormat":
        return (
          <FormInput.PatternFormat
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="h-100"
            // prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            format={item?.format}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "DateTime":
        return (
          <FormInput.DateTime
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameSubContainer="h-100"
            classNameContainer="h-100"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && handleRowChange(index, resetValue);
            }}
            hideErrorMessage
            control={control}
          />
        );
      case "PhoneInput":
        return (
          <FormInput.PhoneInput
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameSubContainer="h-100"
            classNameContainer="h-100"
            hideErrorMessage
            control={control}
          />
        );
      case "Dropdown":
        return (
          <Dropdown align="end" className="h-100">
            <Dropdown.Toggle className="w-100 h-100 shadow-none">
              {data?.[item?.key]?.label ?? "Seçiniz"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {item?.options?.map((e: any, key: number) => (
                <Dropdown.Item
                  key={key}
                  onClick={() => {
                    const resetValue = item?.onChange?.(e, data);
                    // update(index, { ...data, [item?.key]: e });
                    item?.reset && handleRowChange(index, resetValue);
                  }}
                >
                  {e?.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        );
      default:
        return (
          <FormInput.Control
            key={data.id}
            name={key}
            type={item?.type}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="h-100"
            onKeyDown={(e: any) => {
              if (["Enter", "NumpadEnter"].includes(e.code)) {
                const resetValue = item?.onChange?.(e.target.value, data);
                item?.reset && handleRowChange(index, resetValue);
              }
            }}
            hideErrorMessage
            control={control}
          />
        );
    }
  };
  //! COMPONENT BUILDER END

  return (
    <RSTable responsive id="dynagrid" className="text-nowrap">
      <thead>
        <tr>
          {columns?.map((value: any, key: any) => (
            <th style={{ width: value?.width }} key={key}>
              {/*  id={key} */}
              <div
                // draggable={true}
                // onDragStart={(e) => handleStart(e, key)}
                // onDrag={(e) => handleMove(e, key)}
                className={classNames("d-flex align-items-center gap-2 user-select-none", {
                  "justify-content-center": value?.center,
                })}
                onClick={() => {
                  if (value?.sortable) {
                    if (sorting?.key === value?.key) {
                      setSorting({
                        key: value?.key,
                        orderBy: sorting.orderBy === "asc" ? "desc" : sorting.orderBy === "desc" ? "" : "asc",
                      });
                    } else {
                      setSorting({ key: value?.key, orderBy: "asc" });
                    }
                    // reset((i: any) => ({ ...i }));
                  }
                }}
              >
                {value?.name}
                {value?.sortable && (
                  <span className="d-flex">
                    {sorting?.key === value?.key ? (
                      sorting?.orderBy === "desc" ? (
                        <FaSortUp className="text-primary" />
                      ) : sorting?.orderBy === "asc" ? (
                        <FaSortDown className="text-primary" />
                      ) : (
                        <FaSort />
                      )
                    ) : (
                      <FaSort />
                    )}
                  </span>
                )}
              </div>
            </th>
          ))}
          {customFields?.map((item: any, index: number) => (
            <th key={index} style={{ width: "1%", minWidth: "1%" }}>
              <div
                className={classNames("d-flex align-items-center gap-2 user-select-none", {
                  "justify-content-center": item?.center,
                })}
              >
                {item?.header}
              </div>
            </th>
          ))}
          {deletable && <th style={{ width: "1%", minWidth: "1%" }}></th>}
        </tr>
      </thead>
      <tbody className="align-middle position-relative">
        {loading ? (
          <tr>
            <td colSpan={"100%" as any} className="border-0">
              <div className="text-center my-5">
                <Spinner animation="border" variant="primary" />
              </div>
            </td>
          </tr>
        ) : isError || (!loading && fields?.length === 0) ? (
          <tr>
            <td colSpan={"100%" as any}>
              <div className="d-flex flex-column align-items-center">
                <div className="w-25">{!hideNoDataIcon && (noDataIcon ?? <NoData />)}</div>
                <h3 className="page-subtitle text-center">
                  {fields?.length === 0 ? emptyMessage : (error ?? "Bir hata oluştu...")}
                </h3>
              </div>
            </td>
          </tr>
        ) : (
          fields?.map((data: any, key: number) => (
            <tr key={key}>
              {columns?.map((item: any, index: number) => (
                <td
                  className={classNames("editableTd", {
                    "text-center": item?.center,
                  })}
                  key={index}
                >
                  {item?.valueGetter ? item?.valueGetter?.(data) : componentMap(item, data, key)}
                </td>
              ))}
              {customFields?.map(
                (
                  item: {
                    header?: string;
                    text?: string;
                    icon?: any;
                    center?: boolean;
                    className?: string;
                    onClick?: (e: any) => any;
                  },
                  index: number,
                ) => (
                  <td key={index}>
                    <button
                      type="button"
                      className={classNames(
                        "d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0",
                        item?.className,
                      )}
                      onClick={() => item?.onClick?.(data)}
                    >
                      {item?.icon ?? item?.text}
                    </button>
                  </td>
                ),
              )}
              {deletable && (
                <td>
                  <button
                    type="button"
                    className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0"
                    // onClick={() => reset((i: any) => ({ ...i, key: null }))}
                    onClick={() => handleRowDelete(key)}
                  >
                    {deleteIcon ?? <FaTrash size="20" className="text-danger" style={{ maxWidth: "unset" }} />}
                  </button>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </RSTable>
  );
};

const Search = ({ className = "shadow-none", placeholder = "Arama", ...props }: FormControlProps) => {
  const [search, setSearch] = useQueryParams("search");

  return (
    <Form.Control
      type="search"
      value={search}
      onChange={(e: any) => setSearch(e.target.value)}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

const CreateButton = ({ children = "Ekle", ...props }: ButtonProps) => {
  const { handleRowAdd } = useContext(DataGridContext);

  return (
    <Button onClick={handleRowAdd} {...props}>
      {children}
    </Button>
  );
};

const Pagination = ({
  pagination,
  sizePerPageList,
}: {
  pagination: {
    currentPage: number;
    totalCount?: number;
    totalPages: number;
    pageSize?: number;
  };
  sizePerPageList?: {
    text: string;
    value: number;
  }[];
}) => {
  return (
    <DynaPagination
      pagination={{
        currentPage: pagination?.currentPage!,
        pageSize: pagination?.pageSize,
        totalCount: pagination?.totalCount,
        totalPages: pagination?.totalPages!,
      }}
      sizePerPageList={sizePerPageList}
      classNamePagination="ms-lg-auto mb-0"
    />
  );
};

DataGrid.Table = Table;
DataGrid.Search = Search;
DataGrid.CreateButton = CreateButton;
DataGrid.Pagination = Pagination;

export default DataGrid;
