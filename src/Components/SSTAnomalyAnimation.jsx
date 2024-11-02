// SSTAnomalyAnimation.jsx
import React from 'react';

const SSTAnomalyAnimation = () => {
  const gifUrl = "https://climate.copernicus.eu/sites/default/files/custom-uploads/Global%20Climate%20Highlights%202023/Final%20Report/fig6_GCH2023_ERA5_SST_anomaly_monthly_2023_animation.gif";

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sea Surface Temperature Anomaly Animation (2023)</h2>
      <img 
        src={gifUrl} 
        alt="Sea Surface Temperature Anomaly Animation" 
        style={{ width: '100%', maxWidth: '1150px', height: 'auto' }} 
      />
    </div>
  );
};

export default SSTAnomalyAnimation;
