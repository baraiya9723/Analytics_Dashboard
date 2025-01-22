 // src/components/charts/BarChart.jsx
 import React from 'react';
 import { Bar } from 'react-chartjs-2';
 import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend
  } from 'chart.js';
import styles from './Chart.module.css'

ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend
 );

 const BarChart = ({ data, labels, title , ...props }) => {
    const chartData = {
        labels: labels,
        datasets: [
           {
                 label: title,
                  data: data,
               backgroundColor: 'rgba(54, 162, 235, 0.8)',
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
         <Bar data={chartData} options={chartOptions}  {...props}/>
         </div>
    );
 };

 export default BarChart;