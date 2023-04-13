import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { Chart as ChartJS, ArcElement, Tooltip, Legend  } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Pie chart proporties defined here
const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      data: [55, 31, 14],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      labels: false
    },
  ],
};

// pie chart options for small animation
const options = {
  responsive: true,
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

const Topproducts = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#FFFFFF] rounded-[20px] px-[40px] py-[30px]">
      <div className="flex justify-between">
        <h3 className="text-[#000000] text-[18px] font-[700]">Top Products</h3>
        <Link
          className="text-[#DDDDDD] flex items-center gap-1"
          onClick={() => setShow(!show)}
          href=""
        >
          <span>May - Jun 2021 </span>{" "}
          {show ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </Link>
      </div>

      {/* Pie chart imported here */}

      <div className="flex  lg:justify-center items-center gap-[90px] mt-3">

        <div className=" w-[150px] ">
        <Pie data={data} options={options} />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2"> <div className={`bg-[#98D89E] w-[10px] h-[10px] rounded-[5px]`}></div><p className="text-[16px] font-[700]">{data.labels[0]}</p>   </div>
          <div className="flex items-center gap-2"> <div className="bg-[#F6DC7D] w-[10px] h-[10px] rounded-[5px]"></div><p className="text-[16px] font-[700]">{data.labels[1]}</p>   </div>
          <div className="flex items-center gap-2"> <div className="bg-[#EE8484] w-[10px] h-[10px] rounded-[5px]"></div><p className="text-[16px] font-[700]">{data.labels[2]}</p>   </div>
        </div>
      </div>

      
    </div>
  );
};

export default Topproducts;
