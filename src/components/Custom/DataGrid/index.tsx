import React, { useEffect, useMemo, useState } from "react";
import { FaSort, FaSortDown, FaSortUp, FaTrash } from "react-icons/fa6";
import { Col, Row, Spinner, Table as RSTable, Form, Pagination, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";
import { useFieldArray, useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { useQueryParams } from "~/hooks";
import NoData from "../NoData";
import "./DataGrid.scss";
import { DataGridObject } from "./DataGridTypes";
import { StylesConfig } from "react-select";

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

const DataGrid = ({
  title,
  head,
  body,
  searchable,
  asyncSearchable,
  emptyMessage = "Gösterilecek veri bulunmamaktadır.",
  isError = false,
  error,
  loading = false,
  pagination,
  sizePerPageList,
  hideNoDataIcon,
  noDataIcon,
  deleteIcon,
  creatable,
  editable,
  deletable,
  getValues,
  customFields,
}: DataGridObject) => {
  const [sorting, setSorting]: any = useState("");
  const [search, setSearch] = useQueryParams("search");
  const [pageSize, setPageSize] = useQueryParams("pageSize");
  const [page, setPage] = useQueryParams("page");

  const { control, handleSubmit, reset, watch } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "array",
  });

  const array = watch("array") || [];

  const filteredData = useMemo(
    () =>
      asyncSearchable
        ? body
        : [...body]
            ?.filter((items: any) =>
              Object.values(items).some(
                (item: any) =>
                  !React.isValidElement(item) &&
                  (item?.value ?? item)?.toString().toLocaleLowerCase("TR").includes(search.toLocaleLowerCase("TR")),
              ),
            )
            ?.sort((x: any, y: any) => {
              const a = x[sorting?.key]?.value ?? x[sorting?.key];
              const b = y[sorting?.key]?.value ?? y[sorting?.key];
              if (sorting?.orderBy === "asc") {
                return a?.toString().localeCompare(b, undefined, { numeric: true });
              }
              if (sorting?.orderBy === "desc") {
                return b?.toString().localeCompare(a, undefined, { numeric: true });
              }
              return 1;
            }),
    [body, asyncSearchable, search, sorting],
  );

  useEffect(() => {
    reset({ array: filteredData });
  }, [body]);

  useEffect(() => {
    getValues?.(array);
  }, [fields]);

  const submitForm = (values: any) => {
    // eslint-disable-next-line no-unused-vars
    const { array, ...value } = values;
    typeof editable == "function" && editable?.(value);
    reset((i: any) => ({ ...i, key: null }));
  };

  // const createHandle = (values: any, key: number) => {
  //     typeof creatable == 'function' && creatable?.(values?.[key]);
  // };

  //! COMPONENT BUILDER
  const componentMap = (item: any, data?: any, index?: any) => {
    const key = `array.${index}.${item?.key}`;

    // if (React.isValidElement(item?.type)) {
    //   return (
    //     <FormInput.Custom
    //       as={item?.type}
    //       key={data.id}
    //       name={key}
    //       control={control}
    //       classNameContainer="position-absolute inset-0"
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
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
            formatOptionLabel={item?.formatOptionLabel}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            menuPlacement="top"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            control={control}
          />
        );
      case "ReactSelectAsync":
        return (
          <FormInput.ReactSelectAsync
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            menuPlacement="top"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            control={control}
          />
        );
      case "ReactSelectCreatable":
        return (
          <FormInput.ReactSelectCreatable
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            menuPlacement="top"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            control={control}
          />
        );
      case "ReactSelectAsyncCreatable":
        return (
          <FormInput.ReactSelectAsyncCreatable
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
            onCreateOption={async (e: any) => {
              const resetValue = await item?.onCreateOption?.(e);
              item?.onCreateOption && update(index, resetValue);
            }}
            isValidNewOption={item?.isValidNewOption}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            menuPlacement="top"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            control={control}
          />
        );
      case "ReactSelectAsyncUrl":
        return (
          <FormInput.ReactSelectAsyncUrl
            key={data.id}
            name={key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
            optionsUrl={item?.optionsUrl}
            optionConfig={item?.optionConfig}
            getOptionValues={item?.getOptionValues}
            isValidOptionsUrl={item?.isValidOptionsUrl}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
            menuPlacement="top"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
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
            classNameContainer="position-absolute inset-0"
            prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            allowNegative={item?.allowNegative}
            decimalScale={item?.decimalScale}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
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
            classNameContainer="position-absolute inset-0"
            // prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            format={item?.format}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
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
            classNameContainer="position-absolute inset-0"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, data);
              item?.reset && update(index, resetValue);
              item?.submit && handleSubmit(submitForm)();
              getValues?.(array);
            }}
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
            classNameContainer="position-absolute inset-0"
            onInput={() => {
              getValues?.(array);
            }}
            control={control}
          />
        );
      case "Dropdown":
        return (
          <Dropdown align="end" className="position-absolute inset-0">
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
                    item?.reset && update(index, resetValue);
                    item?.submit && handleSubmit(submitForm)();
                    getValues?.(array);
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
            classNameContainer="position-absolute inset-0"
            onKeyDown={(e: any) => {
              if (["Enter", "NumpadEnter"].includes(e.code)) {
                const resetValue = item?.onChange?.(e.target.value, data);
                item?.reset && update(index, resetValue);
                item?.submit && handleSubmit(submitForm)();
              }
            }}
            onInput={() => {
              getValues?.(array);
            }}
            control={control}
          />
        );
    }
  };
  //! COMPONENT BUILDER END

  //! PAGINATION
  const getVisiblePages = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    if (totalPages < 7) {
      return [...Array(totalPages)].map((_, key) => key + 1);
    } else {
      if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 < totalPages) {
        return [1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages];
      } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 >= totalPages) {
        return [1, null, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [1, 2, 3, 4, 5, null, totalPages];
      }
    }
  };

  const pageNumbers = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    const pages = getVisiblePages({ currentPage, totalPages });

    return pages?.map((page: any, key: number) =>
      page == null ? (
        <Pagination.Ellipsis linkClassName="bg-transparent border-0" key={key} disabled />
      ) : (
        <Pagination.Item key={key} onClick={() => page != currentPage && setPage(page)} active={page == currentPage}>
          {page}
        </Pagination.Item>
      ),
    );
  };
  //! PAGINATION END

  //! DRAGGABLE
  // const [drag, setDrag]: any = useState(false);
  // const handleStart = (e: any, row: any) => {
  //     let iniMouse = e.clientX;
  //     let iniSize = document.getElementById(`${row}`)?.offsetWidth;

  //     setDrag({
  //         iniMouse: iniMouse,
  //         iniSize: iniSize,
  //     });
  // };

  // const handleMove = (e: any, row: any) => {
  //     if (e.clientX) {
  //         let iniMouse = drag?.iniMouse;
  //         let iniSize = drag?.iniSize;
  //         let endMouse = e.clientX;

  //         let endSize = iniSize + (endMouse - iniMouse);

  //         document.getElementById(`${row}`)!.style.width = `${endSize}px`;
  //     }
  // };
  //! DRAGGABLE END

  return (
    <>
      <Row className="align-items-center justify-content-end mb-3 g-3">
        {title && (
          <Col className="text-center text-sm-start">
            <h4 className="mb-0">{title}</h4>
          </Col>
        )}
        {searchable && !asyncSearchable && (
          <Col xs="12" sm="6" lg="3">
            <Form.Control
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              type="search"
              placeholder="Arama"
              className="shadow-none"
            />
          </Col>
        )}
        {creatable && (
          <Col xs="12" sm="auto">
            <Button
              className="w-100"
              onClick={() => {
                append(head.reduce((x: any, y: any) => ({ ...x, [y?.key]: "" }), {}));
                // reset(head.reduce((x: any, y: any) => ({ ...x, [y?.key]: '' }), { key: body.length }));
              }}
            >
              Ekle
            </Button>
          </Col>
        )}
      </Row>

      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <RSTable responsive id="dynagrid" className="text-nowrap">
          <thead>
            <tr>
              {head?.map((value: any, key: any) => (
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
                        reset((i: any) => ({ ...i }));
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
                  {item?.header}
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
                      {fields?.length === 0 ? emptyMessage : error ?? "Bir hata oluştu..."}
                    </h3>
                  </div>
                </td>
              </tr>
            ) : (
              fields?.map((data, key) => (
                <tr key={key}>
                  {head?.map((item: any, index: number) => (
                    <td
                      className={classNames("editableTd", {
                        "text-center": item?.center,
                      })}
                      key={index}
                    >
                      {item?.valueGetter ? item?.valueGetter?.(watch(`array.${key}`)) : componentMap(item, data, key)}
                    </td>
                  ))}
                  {customFields?.map((item, index: number) => (
                    <td key={index}>
                      <button
                        type="button"
                        className={classNames(
                          "d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0",
                          item?.className,
                        )}
                        onClick={() => item?.onClick?.(watch(`array.${key}`))}
                      >
                        {item?.icon ?? item?.text}
                      </button>
                    </td>
                  ))}
                  {deletable && (
                    <td>
                      <button
                        type="button"
                        className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0"
                        // onClick={() => reset((i: any) => ({ ...i, key: null }))}
                        onClick={() => remove(key)}
                      >
                        {deleteIcon ?? <FaTrash size="20" className="text-danger" />}
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </RSTable>
      </form>
      {(Array.isArray(sizePerPageList) || pagination?.totalPages) && (
        <div className="d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row gap-3 m-3">
          {Array.isArray(sizePerPageList) && sizePerPageList?.length > 0 && (
            <div className="d-flex align-items-center gap-2">
              <small className="flex-shrink-0">Kayıt Sayısı</small>
              <Form.Select className="shadow-none py-2" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                {sizePerPageList?.map((item, key) => (
                  <option key={key} value={item?.value}>
                    {item?.text}
                  </option>
                ))}
              </Form.Select>
            </div>
          )}
          {pagination?.totalPages && (
            <Pagination className="ms-lg-auto mb-0">
              <Pagination.Prev
                linkClassName="shadow-none"
                disabled={(page || pagination?.currentPage) == 1}
                onClick={() => setPage(+(page || pagination?.currentPage) - 1)}
              />
              {pageNumbers({
                currentPage: +(page || pagination?.currentPage),
                totalPages: pagination?.totalPages,
              })}
              <Pagination.Next
                linkClassName="shadow-none"
                disabled={(page || pagination?.currentPage) == pagination?.totalPages}
                onClick={() => setPage(+(page || pagination?.currentPage) + 1)}
              />
            </Pagination>
          )}
        </div>
      )}
    </>
  );
};

export default DataGrid;
