// src/Components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/resources/global-temperature" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Global Temperature</h2>
          <p>View and analyze global temperature data.</p>
        </Link>
        <Link to="/resources/global-temperature" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Global Temp Anomaly</h2>
          <p>Explore anomalies in global temperature data.</p>
        </Link>
        <Link to="resources/temperature-anomaly-chart" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Seasonal Temp Anomaly</h2>
          <p>Analyze seasonal temperature anomalies.</p>
        </Link>
        <Link to="/resources/greenhouse-gases" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Greenhouse Gases</h2>
          <p>Explore greenhouse gas emissions over the years.</p>
        </Link>
        <Link to="/resources/sea-surface-temperaure" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Sea Surface Temperature</h2>
          <p>View data on sea surface temperature changes.</p>
        </Link>
        <Link to="/resources/temperature-charts" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Temperature Charts</h2>
          <p>Access various temperature charts for analysis.</p>
        </Link>
        <Link to="/resources/HeatMap" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xl font-semibold">Earth Heatmap History</h2>
          <p>View historical heatmap data of the Earth.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
