import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';


ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement);




const SignIn = () => {

  const initState = {
    labels:["week1", "week2", "week3", "week4"],
    datasets: [ {
      label: "First Dataset",
      data:[100, 200, 100, 300, 200, 400],
      
    backgroundColor: 'yellow',
  borderColor: 'orange',
tension: 0.4,
pointRadius: 0}],

    
  }

const[data, setData] = useState(initState);

console.log(data);

  return (
    <div className="w-[500]">
      
<Line data={data}/>

    </div>
  )
}

export default SignIn