// src/components/charts/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
     CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
   Title,
   Tooltip,
   Legend
 } from 'chart.js';
  import styles from './Chart.module.css'

ChartJS.register(
     CategoryScale,
    LinearScale,
     PointElement,
      LineElement,
     Title,
     Tooltip,
     Legend
 );

 const LineChart = ({ data, labels, title , ...props }) => {
     const chartData = {
      labels: labels,
         datasets: [
             {
                label: title,
                 data: data,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                 tension: 0.1,
            },
        ],
     };

    const chartOptions = {
         responsive: true,
          maintainAspectRatio: false,
         plugins: {
            legend: {
              position: 'top',
         },
         title: {
               display: true,
                text: title,
            },
        },
     };
  return (
     <div className={styles.chartContainer}>
        <Line data={chartData} options={chartOptions}  {...props}/>
    </div>
   );
 };

   export default LineChart;