import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const config = {
    series: [
      {
        name: "BTC",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        stroke: {
          width: 4, // Make the line thicker
          curve: "smooth",
          colors: ["#FF8979"], // Set the initial color (start of the gradient)
        },
      },
      {
        name: "ETH",
        data: [
          14, 12, 16, 20, 39, 29, 32, 14, 18, 10, 29, 9, 16, 11, 22, 4, 10, 8,
        ],
      },
      {
        name: "LTC",
        data: [10, 8, 15, 7, 25, 15, 18, 10, 14, 8, 22, 7, 10, 8, 15, 3, 9, 6],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      grid: { show: false },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
          style: {
            colors: [
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
              "#59588D",
            ],
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 15,
        },
        markers: {
          size: 5,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
        y: {
          formatter: undefined,
          title: {
            formatter: () => `$`,
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={config.options}
          series={config.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
