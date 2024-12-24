import classNames from "classnames";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Button, Col, Row, Table as RSTable, Spinner } from "react-bootstrap";
import differenceFormatter from "~/utils/differenceFormatter";
import NoData from "../NoData";

const DifferenceTable = ({
  className,
  title,
  head,
  oldData,
  currentData,
  emptyMessage = "Gösterilecek veri bulunmamaktadır.",
  error = "Bir hata oluştu...",
  isError,
  loading = false,
  hideNoDataIcon,
  noDataIcon,
  children,
  tableTitle,
  showDifferenceButton,
  translateKey,
  difference,
  getDifferences,
}: {
  title?: string;
  className?: string;
  head: [
    {
      key: "#";
      name: string;
      width?: string;
      center?: boolean;
    },
    {
      key: "oldData";
      name: string;
      width?: string;
      center?: boolean;
    },
    {
      key: "currentData";
      name: string;
      width?: string;
      center?: boolean;
    },
  ];
  oldData: any;
  currentData: any;
  emptyMessage?: string;
  error?: string;
  isError?: boolean;
  loading?: boolean;
  hideNoDataIcon?: boolean;
  noDataIcon?: ReactNode;
  children?: ReactNode;
  showDifferenceButton?: boolean;
  translateKey: {
    key: string;
    name: string;
    valueGetter?: (e: any) => any;
  }[];
  difference?: boolean;
  tableTitle?: {
    name?: string;
    center?: boolean;
    valueGetter?: (e: any) => any;
    new?: string;
  };
  getDifferences?: (e: any) => any;
  // setDifference?: (e: boolean) => any;
}) => {
  const [differences, setDifferences] = useState<any[]>([]);
  const [showDifference, setShowDifference] = useState(false);

  useEffect(() => {
    if (oldData && currentData) {
      const diffs = differenceFormatter.compare(oldData, currentData);
      setDifferences(diffs);
      getDifferences?.(diffs);
    }
  }, [oldData, currentData]);

  useEffect(() => {
    setShowDifference(!!difference);
  }, [difference]);

  return (
    <>
      {(children || title || showDifferenceButton) && (
        <Row className="align-items-center justify-content-end mb-3 g-3">
          {children}
          {title && (
            <Col className="text-center text-sm-start">
              <h4 className="mb-0">{title}</h4>
            </Col>
          )}

          {showDifferenceButton && (
            <Col xs="12" sm="auto">
              <Button className="w-100" onClick={() => setShowDifference((status) => !status)}>
                {showDifference ? "Hepsini Göster" : "Farkları Göster"}
              </Button>
            </Col>
          )}
        </Row>
      )}
      {loading ? (
        <div className="d-flex flex-column align-items-center my-5 py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : isError || differences?.length === 0 ? (
        <div className="d-flex flex-column align-items-center my-5 py-5">
          <div className="w-25">{!hideNoDataIcon && (noDataIcon ?? <NoData />)}</div>
          <h3 className="page-subtitle text-center">
            {differences?.length === 0 ? emptyMessage : (error ?? "Bir hata oluştu...")}
          </h3>
        </div>
      ) : (
        differences?.map((data: any, key: number) => (
          <RSTable key={key} responsive id="dynatable" className={classNames("text-nowrap", className)}>
            {tableTitle && (
              <thead>
                <tr>
                  <th colSpan={"100%" as any}>
                    <div
                      className={classNames("d-flex align-items-center gap-2 user-select-none", {
                        "justify-content-center": tableTitle?.center,
                      })}
                    >
                      {tableTitle?.valueGetter?.(data) || tableTitle?.name}{" "}
                      {Object.values(data)?.every((x: any) => x.type === "CREATED") && tableTitle?.new}
                    </div>
                  </th>
                </tr>
              </thead>
            )}
            <thead>
              <tr>
                {head?.map((item: any, index: any) => (
                  <th key={index} style={{ width: item?.width }}>
                    <div
                      className={classNames("d-flex align-items-center gap-2 user-select-none", {
                        "justify-content-center": item?.center,
                      })}
                    >
                      {item?.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-middle position-relative">
              {translateKey?.map((item: any, index: number) => (
                <Fragment key={index}>
                  {(!showDifference ||
                    (data?.[item?.key]?.type == undefined
                      ? data?.[item?.key] &&
                        !Object.values(data?.[item?.key])?.every((x: any) => x?.type === "UNCHANGED")
                      : data?.[item?.key]?.type !== "UNCHANGED")) && (
                    <tr>
                      <td>{item?.name}</td>
                      <td>
                        {item?.valueGetter?.(
                          differenceFormatter.isArrayMode(data?.[item?.key])
                            ? Object.entries(data?.[item?.key]).map(([x, y]: any) => ({ key: x, value: y?.oldData }))
                            : data?.[item?.key]?.oldData,
                        ) ||
                          data?.[item?.key]?.oldData ||
                          "-"}
                      </td>
                      <td>
                        {item?.valueGetter?.(
                          differenceFormatter.isArrayMode(data?.[item?.key])
                            ? Object.entries(data?.[item?.key]).map(([x, y]: any) => ({
                                key: x,
                                value: y?.currentData,
                              }))
                            : data?.[item?.key]?.currentData,
                        ) ||
                          data?.[item?.key]?.currentData ||
                          "-"}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </RSTable>
        ))
      )}
    </>
  );
};
export default DifferenceTable;
