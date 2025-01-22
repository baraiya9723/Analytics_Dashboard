 // src/components/charts/PieChart.jsx
 import React from 'react';
 import { Pie } from 'react-chartjs-2';
  import {
       Chart as ChartJS,
     ArcElement,
       Tooltip,
      Legend
  } from 'chart.js';
import styles from './Chart.module.css'

 ChartJS.register(
      ArcElement,
        Tooltip,
        Legend
  );


 const PieChart = ({ data, labels, title , ...props }) => {
      const chartData = {
      labels: labels,
       datasets: [
             {
                label: title,
                 data: data,
                  backgroundColor: [
                       'rgba(255, 99, 132, 0.8)',
                       'rgba(54, 162, 235, 0.8)',
                       'rgba(255, 206, 86, 0.8)',
                   ],
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
       <Pie data={chartData} options={chartOptions} {...props} />
    </div>
  );
 };

  export default PieChart;