import React, { ReactNode, useEffect, useState } from "react";
import { FaCheck, FaPen, FaPlus, FaSort, FaSortDown, FaSortUp, FaTrash, FaXmark } from "react-icons/fa6";
import {
  Col,
  Row,
  Spinner,
  Table as RSTable,
  Form,
  Pagination,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { useQueryParams } from "~/hooks";
import NoData from "../NoData";
import "./Table.scss";
import { TableObject } from "./TableTypes";
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

const CustomTooltip = ({ tooltip, children }: { tooltip: ReactNode; children: any }) => {
  if (tooltip) {
    return <OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>{children}</OverlayTrigger>;
  }
  return children;
};

const Table = ({
  title,
  className,
  head,
  body = [],
  searchable,
  isAsync,
  asyncSortable,
  emptyMessage = "Gösterilecek veri bulunmamaktadır.",
  errorMessage = "Bir hata oluştu...",
  isError = false,
  loading = false,
  pagination,
  sizePerPageList = [],
  inlineEditable = false,
  hideNoDataIcon,
  noDataIcon,
  createIcon,
  editIcon,
  deleteIcon,
  creatable,
  editable,
  deletable,
  isNotEditable,
  isNotDeletable,
  customFields,
  initialValues,
  children,
}: TableObject) => {
  const [sorting, setSorting] = useState({ key: "", orderBy: "" });
  const [search, setSearch] = useQueryParams("search");
  const [pageSize, setPageSize] = useQueryParams("pageSize");
  const [page, setPage] = useQueryParams("page");
  const { control, handleSubmit, reset, watch, getValues } = useForm();
  const tableKey = watch("key");

  const filteredData = isAsync
    ? body
    : [...body]
        ?.filter((items: any) =>
          Object.values(items).some(
            (item: any) =>
              !React.isValidElement(item) &&
              (item?.label ?? item?.value ?? item)
                ?.toString()
                .toLocaleLowerCase("TR")
                .includes(search.toLocaleLowerCase("TR")),
          ),
        )
        ?.sort((x: any, y: any) => {
          const a = x[sorting?.key]?.value ?? x[sorting?.key];
          const b = y[sorting?.key]?.value ?? y[sorting?.key];
          switch (sorting?.orderBy) {
            case "asc":
              return a?.toString().localeCompare(b, undefined, { numeric: true });
            case "desc":
              return b?.toString().localeCompare(a, undefined, { numeric: true });
            default:
              return 1;
          }
        });

  const submitForm = (values: any) => {
    if (values?.key === body.length) {
      creatable?.(values);
    } else {
      editable?.(values);
    }
    reset((i: any) => ({ ...i, key: null }));
  };

  //! COMPONENT BUILDER
  const componentMap = (item: any, data?: any) => {
    switch (item?.type) {
      case "ReactSelect":
        return (
          <FormInput.ReactSelect
            name={item?.key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
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
            name={item?.key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
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
            name={item?.key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
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
            name={item?.key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            options={item?.options}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            isClearable={false}
            baseStyles={styles}
            menuPosition="fixed"
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
            name={item?.key}
            placeholder={item?.placeholder}
            classNameContainer="position-absolute inset-0"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
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
            control={control}
          />
        );
      case "NumericFormat":
        return (
          <FormInput.NumericFormat
            name={item?.key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="position-absolute inset-0"
            prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            control={control}
          />
        );
      case "PatternFormat":
        return (
          <FormInput.PatternFormat
            name={item?.key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="position-absolute inset-0"
            // prefix={typeof item?.prefix == "function" ? item?.prefix?.(data) : item?.prefix}
            format={item?.format}
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            control={control}
          />
        );
      case "DateTime":
        return (
          <FormInput.DateTime
            name={item?.key}
            placeholder={item?.placeholder}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameSubContainer="h-100"
            classNameContainer="position-absolute inset-0"
            onChangeValue={(e: any) => {
              const resetValue = item?.onChange?.(e, getValues());
              item?.reset && reset(resetValue);
              item?.submit && handleSubmit(submitForm)();
            }}
            control={control}
          />
        );
      case "PhoneInput":
        return (
          <FormInput.PhoneInput
            name={item?.key}
            placeholder={item?.placeholder}
            classNameSubContainer="h-100"
            classNameContainer="position-absolute inset-0"
            // onInput={() => {
            //   getValues?.(array);
            // }}
            control={control}
          />
        );
      default:
        return (
          <FormInput.Control
            type={item?.type}
            name={item?.key}
            className="form-control-plaintext rounded-0 px-3 h-100"
            classNameContainer="position-absolute inset-0"
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
        <Pagination.Item
          linkClassName="shadow-none"
          key={key}
          onClick={() => page != currentPage && setPage(page)}
          active={page == currentPage}
        >
          {page}
        </Pagination.Item>
      ),
    );
  };
  //! PAGINATION END

  //! DRAGGABLE
  // const [drag, setDrag]: any = useState(false);
  // const handleStart = (e: any, row: any) => {
  //   const iniMouse = e.clientX;
  //   const iniSize = document.getElementById(`${row}`)?.offsetWidth;

  //   setDrag({
  //     iniMouse: iniMouse,
  //     iniSize: iniSize,
  //   });
  // };

  // const handleMove = (e: any, row: any) => {
  //   if (e.clientX) {
  //     const iniMouse = drag?.iniMouse;
  //     const iniSize = drag?.iniSize;
  //     const endMouse = e.clientX;

  //     const endSize = iniSize + (endMouse - iniMouse);

  //     document.getElementById(`${row}`)!.style.width = `${endSize}px`;
  //   }
  // };
  //! DRAGGABLE END

  //! INITIAL VALUES
  useEffect(() => {
    if (initialValues?.sorting) {
      setSorting(initialValues.sorting);
    }
  }, []);
  //! INITIAL VALUES END

  return (
    <>
      <Row className="align-items-center justify-content-end mb-3 g-3">
        {title && (
          <Col className="text-center text-sm-start">
            <h4 className="mb-0">{title}</h4>
          </Col>
        )}
        {searchable && !isAsync && (
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
        {children}
        {creatable && (
          <Col xs="12" sm="auto">
            <Button
              className="w-100"
              onClick={() => reset(head.reduce((x: any, y: any) => ({ ...x, [y?.key]: "" }), { key: body.length }))}
              // onClick={() => setCreateValue(head.reduce((x: any, y: any) => ({ ...x, [y?.key]: "" }), {}))}
              // onClick={() => setCreateValue(head.reduce((x: any, y: any) => [...x, { key: y?.key, value: "" }], []))}
            >
              Ekle
            </Button>
          </Col>
        )}
      </Row>

      <form onSubmit={handleSubmit(submitForm)}>
        <RSTable responsive id="dynatable" className={classNames("text-nowrap", className)}>
          <thead>
            <tr>
              {head?.map((item: any, key: any) => (
                <th style={{ width: item?.width }} key={key} /* id={key} */>
                  <div
                    // draggable={true}
                    // onDragStart={(e) => handleStart(e, key)}
                    // onDrag={(e) => handleMove(e, key)}
                    className={classNames("d-flex align-items-center gap-2 user-select-none", {
                      "justify-content-center": item?.center,
                    })}
                    onClick={() => {
                      if (item?.sortable) {
                        const key = item?.key;
                        const orderBy =
                          sorting?.key === key && sorting.orderBy !== ""
                            ? sorting.orderBy === "asc"
                              ? "desc"
                              : ""
                            : "asc";
                        const sortValue = {
                          key: key,
                          orderBy: orderBy,
                        };
                        if (asyncSortable) {
                          const isSort = asyncSortable(sortValue);
                          if (isSort) {
                            setSorting(sortValue);
                          }
                        } else {
                          setSorting(sortValue);
                        }
                        tableKey >= 0 && reset((i: any) => ({ ...i, key: null }));
                      }
                    }}
                  >
                    {item?.name}
                    {item?.sortable && (
                      <span className="d-flex">
                        {sorting?.key === item?.key ? (
                          sorting?.orderBy === "desc" ? (
                            <FaSortUp />
                          ) : sorting?.orderBy === "asc" ? (
                            <FaSortDown />
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
              {editable && <th style={{ width: "1%", minWidth: "1%" }} />}
              {(deletable || tableKey != null) && <th style={{ width: "1%", minWidth: "1%" }} />}
            </tr>
          </thead>
          <tbody className="align-middle position-relative">
            {loading ? (
              <tr>
                <td colSpan={"100%" as any}>
                  <div className="d-flex flex-column align-items-center my-5 py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                </td>
              </tr>
            ) : isError || (!loading && filteredData?.length === 0 && tableKey == null) ? (
              <tr>
                <td colSpan={"100%" as any}>
                  <div className="d-flex flex-column align-items-center">
                    <div className="w-25">{!hideNoDataIcon && (noDataIcon ?? <NoData />)}</div>
                    <h3 className="page-subtitle text-center">{isError ? errorMessage : emptyMessage}</h3>
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {filteredData?.map((data: any, key: number) => (
                  <tr
                    key={key}
                    onDoubleClick={() => {
                      if (inlineEditable) {
                        // setEditValue({ key, value: data });
                        reset({ ...data, key });
                      }
                    }}
                  >
                    {head?.map((item: any, index: number) => (
                      <td
                        className={classNames({
                          editableTd: editable && tableKey === key, // editValue?.key === key,
                          "text-center": item?.center,
                        })}
                        key={index}
                      >
                        {editable && tableKey === key && item?.editable != false
                          ? componentMap(item, data)
                          : (item?.valueGetter?.(data) ??
                            data?.[item?.key]?.label ??
                            data?.[item?.key]?.value ??
                            (data?.[item?.key] || item?.placeholder))}
                      </td>
                    ))}
                    {customFields?.map((item, index: number) => (
                      <td
                        key={index}
                        className={classNames({
                          "text-center": item?.center,
                        })}
                      >
                        {!item?.isHidden?.(data) && (
                          <CustomTooltip tooltip={item?.tooltip}>
                            <button
                              type="button"
                              className={classNames(
                                item?.className ?? "bg-transparent border-0 w-100 h-100",
                                "d-inline-flex align-items-center justify-content-center cursor-pointer",
                              )}
                              onClick={() => item?.onClick?.(data)}
                            >
                              {(typeof item?.icon == "function" ? item?.icon?.(data) : item?.icon) ??
                                (typeof item?.text == "function" ? item?.text?.(data) : item?.text)}
                            </button>
                          </CustomTooltip>
                        )}
                      </td>
                    ))}
                    {editable &&
                      (tableKey === key ? (
                        <>
                          <td>
                            <button
                              type="submit"
                              className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                              // onClick={() => editable(editValue?.value) | setEditValue(null)}
                            >
                              <FaCheck size="20" className="text-success" />
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                              onClick={() => reset((i: any) => ({ ...i, key: null }))}
                            >
                              <FaXmark size="20" className="text-danger" />
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          {!deletable && tableKey != null && <td></td>}
                          <td>
                            {!isNotEditable?.(data) && (
                              <button
                                type="button"
                                className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                                onClick={() => (inlineEditable ? reset({ ...data, key }) : editable(data))}
                              >
                                {editIcon ?? <FaPen size="20" className="text-danger" />}
                              </button>
                            )}
                          </td>
                        </>
                      ))}
                    {deletable && tableKey !== key && (
                      <td>
                        {!isNotDeletable?.(data) && (
                          <button
                            type="button"
                            className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                            onClick={() => deletable(data)}
                          >
                            {deleteIcon ?? <FaTrash size="20" className="text-danger" />}
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
                {creatable && tableKey == body.length && (
                  <tr>
                    {head?.map((item: any, index: number) => (
                      <td
                        className={classNames("editableTd", {
                          "text-center": item?.center,
                        })}
                        key={index}
                      >
                        {componentMap(item)}
                      </td>
                    ))}
                    <td className="text-end">
                      <button
                        type="submit"
                        className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                      >
                        {createIcon ?? <FaPlus size="20" className="text-success" />}
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="d-inline-flex align-items-center justify-content-center cursor-pointer bg-transparent border-0 w-100 h-100"
                        onClick={() => reset((i: any) => ({ ...i, key: null }))}
                      >
                        {deleteIcon ?? <FaTrash size="20" className="text-danger" />}
                      </button>
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </RSTable>
      </form>
      {(sizePerPageList?.length > 0 || pagination?.totalPages) && (
        <div className="d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row gap-3 m-3">
          {sizePerPageList?.length > 0 && (
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
          {!!pagination?.totalPages && (
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

export default Table;
