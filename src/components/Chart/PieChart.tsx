import { ReactNode } from "react";
import Chart, { Props } from "react-apexcharts";
import { Spinner } from "react-bootstrap";
import { getColor } from "~/utils/functions";
import NoData from "../Custom/NoData";

const PieChart = ({
  series = [],
  labels = [],
  // showLabels,
  // height = "500",
  noDataText = "Gösterilecek veri bulunmamaktadır.",
  loadingIcon,
  loading = false,
  formatLabel,
}: {
  series?: any[];
  labels: any[];
  noDataText?: string;
  loadingIcon?: ReactNode;
  loading?: boolean;
  formatLabel?: (val: number, opts?: any) => string | string[];
}) => {
  const options: Props["options"] = {
    labels,
    chart: {
      type: "pie",
      fontFamily: "inherit",
      sparkline: {
        enabled: false,
      },
      animations: {
        enabled: false,
      },
    },
    fill: {
      opacity: 1,
    },
    // stroke: {
    //   width: 2,
    //   lineCap: "round",
    //   curve: "smooth",
    // },
    tooltip: {
      theme: "dark",
    },
    // grid: {
    //   strokeDashArray: 4,
    // },
    colors: [getColor("primary"), getColor("info"), getColor("green"), getColor("red"), getColor("orange"), getColor("pink")],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          // chart: {
          //   height,
          // },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    noData: {
      text: noDataText,
      style: {
        color: "var(--tblr-body-color)",
        // fontSize: "20px",
      },
    },
    yaxis: {
      labels: {
        formatter: formatLabel,
      },
    },
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       labels: {
    //         show: showLabels,
    //         value: {
    //           fontSize: "16px",
    //           color: "var(--bs-body-color)",
    //           formatter: (value: any) => {
    //             return currencyFormatter.format(value);
    //           },
    //         },
    //         total: {
    //           show: true,
    //           color: "var(--bs-body-color)",
    //           fontWeight: "900",
    //           label: "Toplam",
    //           formatter: () => {
    //             return currencyFormatter.format(series.reduce((x: any, y: any) => x + y, 0));
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    // legend: {
    //   labels: {
    //     colors: "var(--bs-body-color)",
    //   },
    // },
  };

  return loading ? (
    <div className="d-flex align-items-center justify-content-center h-100">{loadingIcon ?? <Spinner animation="border" variant="primary" />}</div>
  ) : series.length ? (
    <Chart series={series} options={options} type="pie" />
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <div className="w-50">
        <NoData />
      </div>
      <h3 className="page-subtitle text-center">{noDataText}</h3>
    </div>
  );
};

export default PieChart;
