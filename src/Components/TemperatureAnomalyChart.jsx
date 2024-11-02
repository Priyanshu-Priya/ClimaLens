// TemperatureAnomalyChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const TemperatureAnomalyChart = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Seasonal Anomaly',
        data: [-1.9327, -1.6609, -0.9578, -0.0103, 0.9102, 1.5906, 1.8446, 1.7338, 1.0912, 0.0886, -0.9976, -1.7034],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Seasonal Anomaly + 2 SD',
        data: [-1.86168, -1.59076, -0.891977, 0.052322, 0.971385, 1.65665, 1.9114, 1.80289, 1.16477, 0.168601, -0.918645, -1.63434],
        borderColor: 'lightblue',
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
        fill: true,
        tension: 0.4,
        borderDash: [5, 5], // Dashed line for clarity
      },
      {
        label: 'Seasonal Anomaly - 2 SD',
        data: [-2.00372, -1.73104, -1.02362, -0.07292, 0.849015, 1.52455, 1.7778, 1.66471, 1.01763, 0.008599, -1.07656, -1.77246],
        borderColor: 'lightblue',
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
        fill: true,
        tension: 0.4,
        borderDash: [5, 5], // Dashed line for clarity
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature Anomaly (K)',
        },
        min: -3,
        max: 2,
      },
    },
  };

  return (
    <div>
      <h2>Seasonal Temperature Anomaly (1980-2015)</h2>
      <div style={{ height: 'auto', width: '100%' }}> {/* Set your desired height and width */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TemperatureAnomalyChart;
