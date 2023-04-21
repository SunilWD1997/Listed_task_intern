import LineChart from "./LineChart";
import { IoIosArrowDown} from 'react-icons/io'



const Activities = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] pl-4 lg:px-10  py-4">
      <h2 className="text-[18px] text-[#000000] font-[700] relative top-1">Activities</h2>
      <div className="flex justify-between pr-7 mb-2">
        <span className="text-[#858585] flex items-center"> <span>May - June 2021</span> <span><IoIosArrowDown/></span> </span>
        <div className="flex gap-7">
          <div className="flex items-center gap-2">
            
            <span className=" block rounded-[10px] bg-[#E9A0A0] w-[10px] h-[10px]"></span>
            <span>Guest</span>
          </div>
          <div className="flex items-center gap-2">
            
            <span className=" block rounded-[10px] bg-[#9BDD7C] w-[10px] h-[10px]"></span>
            <span>User</span>
          </div>
        </div>
      </div>

      <LineChart />
    </div>
  );
};

export default Activities;
