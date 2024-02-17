import Chart, { Props } from "react-apexcharts";
import { getColor, secondToTime } from "~/utils/functions";
// import { currencyFormatter } from "~/utils/functions";

const PieChart = ({
  series = [],
  labels = [],
  // showLabels,
  // height = "500",
  noDataText = "Veri bulunamadı.",
  loadingText = "Yükleniyor...",
  isFetching = false,
}: any) => {
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
      text: isFetching ? loadingText : noDataText,
      // style: {
      //   color: "var(--custom-color-100)",
      //   fontSize: "20px",
      //   fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      // },
    },
    yaxis: {
      labels: {
        formatter: (value: any) => {
          return secondToTime(value);
        },
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

  return <Chart series={isFetching ? [] : series} options={options} type="pie" />;
};

export default PieChart;
