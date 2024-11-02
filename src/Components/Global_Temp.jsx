import React from 'react'
import Global_Temp_img from '../assets/Global_Mean_Temp.png'
const Global_Temp = () => {
  return (
    <div>
        <a 
    href="https://data.giss.nasa.gov/tmp/gistemp/CUSTOM_GRAPHS/6683b71a-ca33-427d-874c-13205de86a25/graph.html" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      
      src={Global_Temp_img} 
      alt="NASA GISS Global Temperature Visualization"
      style={{  width: '100%', maxWidth: '1150px', height: 'auto'  }}
    />
  </a>

    </div>
  )
}

export default Global_Temp
