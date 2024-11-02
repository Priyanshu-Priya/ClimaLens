// src/pages/Resource.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Global_Temperature from '../Components/Global_Temperature';
import Greenhouse_Gases from '../Components/Greenhouse_Gases';
import TemperatureAnomalyChart from '../Components/TemperatureAnomalyChart';
import Global_Temp from '../Components/Global_Temp';
import SSTAnomalyAnimation from '../Components/SSTAnomalyAnimation';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';
import './Resources.css';
import TemperatureChart from '../Components/TemperatureCharts';
import HeatMap from '../Components/HeatMap';


const Resource = () => {
  return (
    <>
      <Sidebar />
      <div className="resources custom-margin" style={ {  padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="global-temperature" element={<Global_Temperature />} />
          <Route path="global-temp" element={<Global_Temp />} />
          <Route path="greenhouse-gases" element={<Greenhouse_Gases />} />
          <Route path="temperature-anomaly-chart" element={<TemperatureAnomalyChart />} />
          <Route path="sea-surface-temperaure" element={<SSTAnomalyAnimation />} />
          <Route path="temperature-charts" element={<TemperatureChart/>} />
          <Route path="heatmap" element={<HeatMap/>} />

        </Routes>
      </div>  
    </>
  );
};

export default Resource;
