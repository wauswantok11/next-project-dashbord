import React from "react";
import Chart from "chart.js";

declare global {
  interface Window {
    myLine: Chart;
  }
}

interface ChartConfig {
  type: string;
  data: {
    labels: string[];
    datasets: Array<{
      label: number;
      backgroundColor: string;
      borderColor: string;
      data: number[];
      fill: boolean;
    }>;
  };
  options: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    title: {
      display: boolean;
      text: string;
      fontColor: string;
    };
    legend: {
      display: boolean;
      labels: {
        fontColor: string;
      };
      align: string;
      position: string;
    };
    tooltips: {
      mode: string;
      intersect: boolean;
    };
    hover: {
      mode: string;
      intersect: boolean;
    };
    scales: {
      xAxes: Array<{
        ticks: {
          fontColor: string;
        };
        display: boolean;
        scaleLabel: {
          display: boolean;
          labelString: string;
          fontColor: string;
        };
        gridLines: {
          display: boolean;
          borderDash: number[];
          borderDashOffset: number[];
          color: string;
          zeroLineColor: string;
          zeroLineBorderDash: number[];
          zeroLineBorderDashOffset: number[];
        };
      }>;
      yAxes: Array<{
        ticks: {
          fontColor: string;
        };
        display: boolean;
        scaleLabel: {
          display: boolean;
          labelString: string;
          fontColor: string;
        };
        gridLines: {
          borderDash: number[];
          borderDashOffset: number[];
          drawBorder: boolean;
          color: string;
          zeroLineColor: string;
          zeroLineBorderDash: number[];
          zeroLineBorderDashOffset: number[];
        };
      }>;
    };
  };
}

function CardLineChart() {
  React.useEffect(() => {
    const config: ChartConfig = {
      type: "line",
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
            label: new Date().getFullYear(),
            backgroundColor: "#8593ED",
            borderColor: "#8593ED",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#C7CEEF",
            borderColor: "#C7CEEF",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#000",
        },
        legend: {
          display: false,
          labels: {
            fontColor: "#000",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#000",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "#000",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#000",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#000",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "#000",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const canvas = document.getElementById("line-chart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      window.myLine = new Chart(ctx, {
        type: config.type,
        data: {
          labels: config.data.labels,
          datasets: config.data.datasets.map((dataset) => ({
            ...dataset,
            label: dataset.label.toString(), // Convert number to string
          })),
        },
        options: {
          ...config.options,
          tooltips: {
            mode: "index" as const,
            intersect: config.options.tooltips.intersect,
          },
          hover: {
            mode: "nearest" as const,
            intersect: config.options.hover.intersect,
          },
          legend: {
            ...config.options.legend,
            labels: {
              fontColor: config.options.legend.labels.fontColor,
            },
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
                ticks: {
                  fontColor: config.options.scales.xAxes[0].ticks.fontColor,
                },
                display: config.options.scales.xAxes[0].display,
                scaleLabel: config.options.scales.xAxes[0].scaleLabel,
                gridLines: {
                  display: config.options.scales.xAxes[0].gridLines.display,
                  borderDash:
                    config.options.scales.xAxes[0].gridLines.borderDash,
                  borderDashOffset:
                    config.options.scales.xAxes[0].gridLines
                      .borderDashOffset[0], // Convert array to single number
                  color: config.options.scales.xAxes[0].gridLines.color,
                  zeroLineColor:
                    config.options.scales.xAxes[0].gridLines.zeroLineColor,
                  zeroLineBorderDash:
                    config.options.scales.xAxes[0].gridLines.zeroLineBorderDash,
                  zeroLineBorderDashOffset:
                    config.options.scales.xAxes[0].gridLines
                      .zeroLineBorderDashOffset[0], // Convert array to single number
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: config.options.scales.yAxes[0].ticks.fontColor,
                },
                display: config.options.scales.yAxes[0].display,
                scaleLabel: config.options.scales.yAxes[0].scaleLabel,
                gridLines: {
                  borderDash:
                    config.options.scales.yAxes[0].gridLines.borderDash,
                  borderDashOffset:
                    config.options.scales.yAxes[0].gridLines
                      .borderDashOffset[0], // Convert array to single number
                  drawBorder:
                    config.options.scales.yAxes[0].gridLines.drawBorder,
                  color: config.options.scales.yAxes[0].gridLines.color,
                  zeroLineColor:
                    config.options.scales.yAxes[0].gridLines.zeroLineColor,
                  zeroLineBorderDash:
                    config.options.scales.yAxes[0].gridLines.zeroLineBorderDash,
                  zeroLineBorderDashOffset:
                    config.options.scales.yAxes[0].gridLines
                      .zeroLineBorderDashOffset[0], // Convert array to single number
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
          <div className="relative h-[250px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLineChart;
