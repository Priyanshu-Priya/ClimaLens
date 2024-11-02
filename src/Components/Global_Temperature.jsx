import React from 'react'


const Global_Temperature = () => {
  return (
    <>
    <div className="Global_temerature">
    <h1>Global Teperature</h1>
    
    {/* Embedding the iframe chart */}
    <p>
      <iframe 
        aria-label="Column Chart" 
        data-external="1" 
        frameBorder="0" 
        height="384" 
        id="datawrapper-chart-634bg" 
        scrolling="no" 
        src="https://datawrapper.dwcdn.net/634bg/3/" 
        style={{ width: '0', minWidth: '100%', border: 'none' }} 
        title="June-August global temperatures compared to 20th-century average"
      ></iframe>
    </p>

    {/* Adding the script to handle responsive height */}
    <script type="text/javascript">
    {`!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();`}
    </script>
  </div>

  
  </>
  )
}

export default Global_Temperature
