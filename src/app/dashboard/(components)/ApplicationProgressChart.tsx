"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ApplicationProgressChart = () => {
  const [doughnutChartAppliedBgColor, setDoughnutChartAppliedBgColor] =
    useState<string>("");
  const [doughnutChartRejectedBgColor, setDoughnutChartRejectedBgColor] =
    useState<string>("");
  const [doughnutChartHiredBgColor, setDoughnutChartHiredBgColor] =
    useState<string>("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const appliedBgColor = rootStyles
      .getPropertyValue("--doughnut-chart-applied-bg")
      .trim();
    const rejectedBgColor = rootStyles
      .getPropertyValue("--doughnut-chart-rejected-bg")
      .trim();
    const hiredBgColor = rootStyles
      .getPropertyValue("--doughnut-chart-hired-bg")
      .trim();

    setDoughnutChartAppliedBgColor(appliedBgColor);
    setDoughnutChartRejectedBgColor(rejectedBgColor);
    setDoughnutChartHiredBgColor(hiredBgColor);
  }, []);

  const data: ChartData<"doughnut"> = {
    labels: ["Applied", "Rejected", "Hired"],
    datasets: [
      {
        label: "Application Status",
        data: [50, 20, 10],
        backgroundColor: [
          doughnutChartAppliedBgColor, // Applied
          doughnutChartRejectedBgColor, // Rejected
          doughnutChartHiredBgColor, // Hired
        ],
        // hoverBackgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legend position
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
  };

  return (
    <div className="w-full rounded-lg bg-foreground p-5 shadow md:w-1/2">
      <h3 className="mb-5 text-lg font-semibold tracking-tight">
        Application Status
      </h3>
      <div className="flex max-h-[300px] w-full items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ApplicationProgressChart;
