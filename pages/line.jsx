import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
   
  };
  
  const labels = ['', 'Week1', 'Week2', 'Week3', 'Week4'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [200,100, 200, 300, 200],
        borderColor: '#98D89E',
        backgroundColor: '#98D89E',
        tension: 0.5,
        pointRadius: 0,
      
        
      },
      {
        label: 'Dataset 2',
        data: [100, 200, 100, 300, 100],
        borderColor: '#EE8484',
        backgroundColor: '#EE8484',
        tension: 0.5,
        pointRadius: 1
        
      },
    ],
  };

const line = () => {
  return (
    <div className='h-[300px]'> <Line options={options} data={data} />;</div>
  )
}

export default line