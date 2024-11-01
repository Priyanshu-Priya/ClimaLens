// src/pages/Resource.js
import React from 'react';
import Global_Temperature from '../Components/Global_Temperature';
import Greenhouse_Gases from '../Components/Greenhouse_Gases';



const Resource = () => {
  return (
   <>
   <div className="resources">
   <Global_Temperature/>
   <Greenhouse_Gases/>
   </div>
   
   </>
  );
};

export default Resource;
