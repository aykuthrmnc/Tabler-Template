import { ReactNode } from "react";
import Chart, { Props } from "react-apexcharts";
import { Spinner } from "react-bootstrap";
import { getColor } from "~/utils/functions";
import NoData from "../Custom/NoData";

const ColumnChart = ({
  series = [],
  labels = [],
  // showLabels,
  // height = "500",
  noDataText = "Gösterilecek veri bulunmamaktadır.",
  loadingIcon,
  loading = false,
  options,
  onClick,
}: {
  series?: { name: string; data: any[] }[];
  labels: any[];
  noDataText?: string;
  loadingIcon?: ReactNode;
  loading?: boolean;
  options?: Props["options"];
  onClick?: (e: any) => void;
}) => {
  const customOptions: Props["options"] = {
    labels,
    chart: {
      type: "bar",
      fontFamily: "inherit",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      events: {
        dataPointSelection: (_e, _chart, options) => {
          onClick?.(options.w.config.series[options.seriesIndex].data[options.dataPointIndex]);
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        left: -4,
        bottom: -4,
      },
      strokeDashArray: 4,
    },
    xaxis: {
      categories: labels,
      labels: {
        trim: true,
        rotate: 0,
        style: {
          colors: "var(--tblr-body-color)",
        },
        hideOverlappingLabels: false,
      },
      axisBorder: {
        show: false,
      },
    },
    colors: [getColor("primary"), getColor("teal")],
    legend: {
      show: true,
      labels: {
        colors: "var(--tblr-body-color)",
      },
    },
    // responsive: [
    //   //   ...options.responsive,
    //   //   {
    //   //     breakpoint: 600,
    //   //     options: {
    //   //       //   chart: {
    //   //       //     height: 450,
    //   //       //   },
    //   //       //   legend: {
    //   //       //     position: "bottom",
    //   //       //   },
    //   //       yaxis: {
    //   //         categories: labels,
    //   //         labels: {
    //   //           style: {
    //   //             colors: "var(--tblr-body-color)",
    //   //           },
    //   //         },
    //   //       },
    //   //       plotOptions: {
    //   //         bar: {
    //   //           horizontal: true,
    //   //         },
    //   //       },
    //   //     },
    //   //   },
    //   {
    //     breakpoint: 992,
    //     options: {
    //       plotOptions: {
    //         bar: {
    //           horizontal: false,
    //         },
    //       },
    //     },
    //   },
    // ],
    noData: {
      text: noDataText,
      style: {
        color: "var(--tblr-body-color)",
        // fontSize: "20px",
      },
    },
    ...options,
  };

  return loading ? (
    <div className="d-flex align-items-center justify-content-center h-100">
      {loadingIcon ?? <Spinner animation="border" variant="primary" />}
    </div>
  ) : series.length ? (
    <Chart series={series} options={customOptions} type="bar" />
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div>
        <NoData />
      </div>
      <h3 className="page-subtitle text-center">{noDataText}</h3>
    </div>
  );
};

export default ColumnChart;
