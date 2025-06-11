import React, { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip);

//  Line Chart Using Chart.js 

interface Props {
  data: number[];
  color: string;
}

const SparklineChart: React.FC<Props> = ({ data, color }) => {
  const chartRef = useRef<any>(null);

  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        label: "Trend",
        data,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 60, height: 50 }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default SparklineChart;
