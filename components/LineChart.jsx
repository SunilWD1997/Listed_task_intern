
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
    scales: {
      y: {
        beginAtZero: true,
        
      },
      x: {
        grid: {
          display: false,
         
        }
        
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
   
  };
  
export const data = {
    labels: ['', 'Week1', 'Week2', 'Week3', 'Week4'],
    datasets: [
      {
        label: 'User',
        data: [100,410, 150, 450, 180],
        borderColor: '#98D89E',
        backgroundColor: '#98D89E',
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 2,
      
        
      },
      {
        label: 'Guest',
        data: [200, 380, 130, 300, 490],
        borderColor: '#EE8484',
        backgroundColor: '#EE8484',
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 2,
        
      },
    ],
  };

const LineChart = () => {
  return (
    <div className='h-[190px] '> <Line options={options} data={data} />;</div>
  )
}

export default LineChart;