import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from '../../styles/analyticPlataform.module.scss';


export default function ApexChart () {
  const [series, setSeries] = useState([44, 55, 41]);
    
    const [options, setOptions] = useState({  
        chart: {
          type: 'donut',
          foreColor: "#FFFFFF"
          
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              foreColor: "#FFFFFF"
             
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      });

 
    return (
      
<div id="chart">
<ReactApexChart options={options} series={series} type="donut" className={styles.donut} />
</div>
); 
}





