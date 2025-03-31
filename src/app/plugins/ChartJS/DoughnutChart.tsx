import React from "react";
import Chart from "chart.js";
import { ValueChartDoughnut } from "./CharDto";

declare global {
  interface Window {
    myDoughnut: Chart;
  }
}

interface ChartConfig {
  type: string;
  data: {
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }>;
  };
  options: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    cutoutPercentage: number;
    legend: {
      display: boolean;
      position: string;
      labels: {
        fontColor: string;
      };
    };
  };
}
interface CardBarDoughnutProps {
  value: ValueChartDoughnut[];
}
function CardBarDoughnut(datas : CardBarDoughnutProps) {
  React.useEffect(() => {
    const config: ChartConfig = {
      type: "doughnut",
      data: {
        labels: datas.value.map(item => item.name),
        datasets: [
          {
            data: datas.value.map(item => item.value),
            backgroundColor: datas.value.map(item => item.color),
            borderColor: datas.value.map(item => item.color),
            borderWidth: 1
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        cutoutPercentage: 75,
        legend: {
          display: false,
          position: "bottom",
          labels: {
            fontColor: "#000"
          }
        }
      },
    };
    const canvas = document.getElementById("doughnut-chart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      window.myDoughnut = new Chart(ctx, {
        ...config,
        options: {
          ...config.options,
          legend: {
            ...config.options.legend,
            position: 'bottom' as const // Type assertion to PositionType
          }
        }
      });
    }
  }, [datas]);

  return (
    <>
      <div className="mt-5 relative flex flex-col min-w-0 break-words w-full">
        <div className="flex-auto">
          <div className="relative h-[300px]">
            <canvas id="doughnut-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBarDoughnut;
