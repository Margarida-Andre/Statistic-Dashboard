import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from '../../styles/analyticPlataform.module.scss';

export default function ApexChart() {
  const [series, setSeries] = useState([44, 55, 67, 83]);
      
        
  const [options, setOptions] = useState({
          chart: {
            height: 350,
            type: 'radialBar',
            foreColor: "#FFFFFF",
            background: "#32323B"
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        });
  
  

   
  return (
        

  <div id="chart">
<ReactApexChart options={options} series={series} type="radialBar" height={300} />
</div>

); 
}
