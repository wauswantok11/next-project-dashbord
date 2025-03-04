import React from "react";
import Chart from "chart.js";

declare global {
  interface Window {
    myBar: Chart;
  }
}

interface ChartConfig {
  type: string;
  data: {
    labels: string[];
    datasets: Array<{
      // label: number;
      backgroundColor: string;
      borderColor: string;
      data: number[];
      fill: boolean;
      barThickness: number;
    }>;
  };
  options: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    title: {
      display: boolean;
      text: string;
    };
    tooltips: {
      mode: string;
      intersect: boolean;
    };
    hover: {
      mode: string;
      intersect: boolean;
    };
    legend: {
      display: boolean;
      labels: {
        fontColor: string;
      };
      align: string;
      position: string;
    };
    scales: {
      xAxes: Array<{
        display: boolean;
        scaleLabel: {
          display: boolean;
          labelString: string;
        };
        gridLines: {
          borderDash: number[];
          borderDashOffset: number[];
          color: string;
          zeroLineColor: string;
          zeroLineBorderDash: number[];
          zeroLineBorderDashOffset: number[];
        };
      }>;
      yAxes: Array<{
        display: boolean;
        scaleLabel: {
          display: boolean;
          labelString: string;
        };
        gridLines: {
          borderDash: number[];
          drawBorder: boolean;
          borderDashOffset: number[];
          color: string;
          zeroLineColor: string;
          zeroLineBorderDash: number[];
          zeroLineBorderDashOffset: number[];
        };
      }>;
    };
  };
}

export default function CardBarChart() {
  React.useEffect(() => {
    const config: ChartConfig = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            // label: new Date().getFullYear(),
            backgroundColor: "#C7CEEF",
            borderColor: "#C7CEEF",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 20,
          },
          {
            // label: new Date().getFullYear() - 1,
            backgroundColor: "#8593ED",
            borderColor: "#8593ED",
            data: [27, 68, 86, 74, 10, 4, 87],
            fill: false,
            barThickness: 20,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false,
          labels: {
            fontColor: "#000",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const canvas = document.getElementById("bar-chart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      window.myBar = new Chart(ctx, {
        type: config.type,
        data: config.data,
        options: {
          maintainAspectRatio: config.options.maintainAspectRatio,
          responsive: config.options.responsive,
          title: config.options.title,
          tooltips: {
            mode: "index" as const,
            intersect: config.options.tooltips.intersect,
          },
          hover: {
            mode: "nearest" as const,
            intersect: config.options.hover.intersect,
          },
          legend: {
            display: config.options.legend.display,
            labels: config.options.legend.labels,
            align: config.options.legend.align as "start" | "center" | "end",
            position: config.options.legend.position as
              | "top"
              | "left"
              | "bottom"
              | "right",
          },
          scales: {
            xAxes: [
              {
                display: config.options.scales.xAxes[0].display,
                scaleLabel: config.options.scales.xAxes[0].scaleLabel,
                gridLines: {
                  borderDash:
                    config.options.scales.xAxes[0].gridLines.borderDash,
                  borderDashOffset:
                    config.options.scales.xAxes[0].gridLines
                      .borderDashOffset[0],
                  color: config.options.scales.xAxes[0].gridLines.color,
                  zeroLineColor:
                    config.options.scales.xAxes[0].gridLines.zeroLineColor,
                  zeroLineBorderDash:
                    config.options.scales.xAxes[0].gridLines.zeroLineBorderDash,
                  zeroLineBorderDashOffset:
                    config.options.scales.xAxes[0].gridLines
                      .zeroLineBorderDashOffset[0],
                },
              },
            ],
            yAxes: [
              {
                display: config.options.scales.yAxes[0].display,
                scaleLabel: config.options.scales.yAxes[0].scaleLabel,
                gridLines: {
                  borderDash:
                    config.options.scales.yAxes[0].gridLines.borderDash,
                  drawBorder:
                    config.options.scales.yAxes[0].gridLines.drawBorder,
                  borderDashOffset:
                    config.options.scales.yAxes[0].gridLines
                      .borderDashOffset[0],
                  color: config.options.scales.yAxes[0].gridLines.color,
                  zeroLineColor:
                    config.options.scales.yAxes[0].gridLines.zeroLineColor,
                  zeroLineBorderDash:
                    config.options.scales.yAxes[0].gridLines.zeroLineBorderDash,
                  zeroLineBorderDashOffset:
                    config.options.scales.yAxes[0].gridLines
                      .zeroLineBorderDashOffset[0],
                },
              },
            ],
          },
        },
      });
    }
  }, []);
  return (
    <>
      <div className="mt-5 relative flex flex-col min-w-0 break-words w-full">
        <div className="flex-auto">
          <div className="relative h-[300px]">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
