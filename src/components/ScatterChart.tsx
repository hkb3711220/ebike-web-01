import React from "react";
import { motion } from 'framer-motion';
import { itemVariant } from "../constants";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Context } from "chartjs-plugin-datalabels";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface DataPoint {
  x: number;
  y: number;
}

const ScatterChart = () => {
  const pointData: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Other Company",
        data: [
          {
            x: 1,
            y: 25,
          },
          {
            x: 2,
            y: 35,
          },
          {
            x: 3,
            y: 45,
          },
          {
            x: 4,
            y: 60,
          },
        ],
        backgroundColor: "lightgray",
      },
      {
        label: "Shien Ebike",
        data: [
          {
            x: 5,
            y: 85,
          },
        ],
        backgroundColor: "#F60000",
      },
    ],
  };

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    events: [],
    animation: {
      easing: "easeInOutElastic",
      duration: 1600,
    },
    elements: {
      point: {
        radius: 12,
      },
    },
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: true,
        clip: false,
        align: "left",
        anchor: "center",
        formatter: (value: DataPoint, context: Context) =>
          context.datasetIndex === 1 ? "SHIEN" : "",
        offset: 15,
        font: {
          size: 20,
          family: "Teko",
          weight: "bold",
        },
        color: "black",
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,

        title: {
          display: true,
          text: "Battery life (Hours)",
          font: {
            size: 20,
            family: "Teko",
            weight: "bold",
          },
          color: "black",
        },
        grid: {
          display: true,
        },
        ticks: {
          color: "black",
          font: {
            size: 20,
            family: "Teko",
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <motion.div variants={itemVariant} className="h-full">
      <Scatter data={pointData} plugins={[ChartDataLabels]} options={options} />
    </motion.div>
    
  );
};

export default ScatterChart;
