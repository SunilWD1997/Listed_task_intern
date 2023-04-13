import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend );

const options = {
  
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },


 
};

const data = {
  labels: ["Week-1", "week-2", "week-3", "Week 4"],
  
  datasets: [
    {
      label: "Dataset 1",
      data: [200, 400, 200, 300, 190],
      borderColor: "#9BDD7C",
      backgroundColor: "#9BDD7C",
      tension: '0.5',
      pointRadius: '0'
    },
    {
      label: "Dataset 2",
      data: [100, 450, 150, 460, 180],
      borderColor: "#E9A0A0",
      backgroundColor: "#E9A0A0",
      tension: '0.5',
      pointRadius: '0'
    },
  ],
};




const Activities = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] h-[200px] px-10 py-[30px]">
      <h2 className="text-[18px] text-[#000000] font-[700]">Activities</h2>
      <div className="flex justify-between">
        <span className="text-[#858585] ">May - June 2021</span>
        <div className="flex gap-7">
         <div className="flex items-center gap-2">  <span className=' block rounded-[10px] bg-[#E9A0A0] w-[10px] h-[10px]'></span> <span>Guest</span> </div>
         <div className="flex items-center gap-2">  <span className=' block rounded-[10px] bg-[#9BDD7C] w-[10px] h-[10px]'></span> <span>User</span> </div>
         
    
        </div>
   
      </div>
      {/* <div className="  " >
      <Line data={data} options={options} />
    </div> */}
    </div>
  );
};

export default Activities;
