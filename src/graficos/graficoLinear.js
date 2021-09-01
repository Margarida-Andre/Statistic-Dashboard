import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from '../../styles/analyticPlataform.module.scss';
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
              name: "Apps",
              foreColor: "#f1a025",
              data: [32]
            },
            {
              name: "Web",
              data: [41]
            }, 
          ],
        options: {
            chart: {
                type: "bar",
                height: 50,
                foreColor: "#FFFFFF",
                stacked: true,
                stackType: "100%",
                toolbar: {
                show: false
                }
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
              dataLabels: {
                dropShadow: {
                  enabled: true
                },
                formatter: function(val) {
                  return val ? val.toFixed(1) + '%' : ''
                }
              },
              stroke: {
                width: 0
              },
              grid: {
                show: false,
                padding: {
                  top: 0,
                  bottom: 0,
                  right: 60,
                  left: 0
                }
              },
              xaxis: {
                categories: ["."],
                labels: {
                  show: false
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                }
              },
              fill: {
                opacity: 1,
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "vertical",
                  shadeIntensity: 0.35,
                  gradientToColors: undefined,
                  inverseColors: false,
                  opacityFrom: 0.85,
                  opacityTo: 0.85,
                  stops: [90, 0, 100]
                }
              },
            
              legend: {
                position: "bottom",
                horizontalAlign: "right"
              }
          
        }
    }
      };
    
    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} />
</div>


); 
}
}

export default ApexChart;
