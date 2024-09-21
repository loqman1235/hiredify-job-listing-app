"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const ProfileViewsChart = () => {
  const [chartBgColor, setChartBgColor] = useState<string>("");
  const [chartBorderColor, setChartBorderColor] = useState<string>("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const bgColor = rootStyles.getPropertyValue("--chart-bg").trim();
    const borderColor = rootStyles.getPropertyValue("--chart-border").trim();
    setChartBgColor(bgColor);
    setChartBorderColor(borderColor);
  }, []);

  // add dates
  const labels = [
    "Sep 7, 2024",
    "Sep 8, 2024",
    "Sep 9, 2024",
    "Sep 12, 2024",
    "Sep 14, 2024",
    "Sep 18, 2024",
    "Sep 20, 2024",
  ];
  const datasets = [1200, 1400, 1000, 800, 1600, 2000, 1800];

  const data: ChartData<"line"> = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Views",
        data: datasets,
        fill: true,
        borderColor: chartBorderColor,
        backgroundColor: chartBgColor,
        tension: 0.3,
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    scales: {
      y: {
        display: true,
        min: 10,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="full rounded-lg bg-foreground p-5 shadow md:w-1/2">
      <h3 className="mb-5 text-lg font-semibold tracking-tight">
        Profile Views
      </h3>
      <div className="max-h-[300px] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfileViewsChart;
