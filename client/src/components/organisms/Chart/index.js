import React from "react";
import Chartjs from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  type: "bar",
  labels: ["혁신", "괴짜"],
  datasets: [
    {
      data: [145, 245],
      backgroundColor: ["#49cfd7", "#71BF8B"],
      borderColor: ["#1E90FF", "#228B22"],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
    <Bar
      data={data}
      options={{
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,

        plugins: {
          datalabels: {
            display: true,
            color: "black",
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: false },
          },
          y: { grid: { display: false } },
        },
      }}
    />
  );
}
