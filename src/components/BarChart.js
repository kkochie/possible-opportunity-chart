import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart({ probabilityHistory }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Probability History",
      },
    },
  }

  const len = probabilityHistory.length
  const labels = []
  for (let i = 0; i < len; i++) {
    labels.push(`Week ${i + 1}`)
  }

  const pxProb = () => probabilityHistory.map((each) => each.pilytixProb * 100)

  const repProb = () => probabilityHistory.map((each) => each.repProb * 100)

  const data = {
    labels,
    datasets: [
      {
        label: "PX Probability %",
        data: pxProb({ min: 0, max: 100 }),
        backgroundColor: "rgba(75, 221, 181, .75)",
      },
      {
        label: "Rep Probability %",
        data: repProb({ min: 0, max: 100 }),
        backgroundColor: "rgba(116, 174, 250, .75)",
      },
    ],
  }

  return <Bar options={options} data={data} />
}
