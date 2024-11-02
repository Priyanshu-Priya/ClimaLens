import React, { useEffect } from 'react';
import './HeatMap.css'

const HeatMap = () => {
  useEffect(() => {
    // This ensures the script is only added once
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.setAttribute('data-ot-ignore', '');
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="heatmap-container">
      <div className="flourish-embed flourish-chart" data-src="story/1969202">
        {/* The script will take care of embedding the chart */}
      </div>
    </div>
  );
};

export default HeatMap;
