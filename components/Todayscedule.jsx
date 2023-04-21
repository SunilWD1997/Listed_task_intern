import Link from "next/link";
import { useState } from "react";
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'

const Todayscedule = () => {
    const[show, setShow] = useState(false);
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] px-[40px] py-7">
      <div className="flex justify-between">
        <h3 className="text-[#000000] text-[18px] font-[700]">
         { `Today's schedule`}
        </h3>
        <Link className="text-[#DDDDDD] flex items-center gap-1" onClick={()=>setShow(!show)} href="">
          <span>See All</span> {show?<IoIosArrowForward />: <IoIosArrowDown/>}
        </Link>
      </div>

      {/* Recent Schedules of Today-1 */}
      <div className="flex items-center gap-3 mt-3">
        <div className=" bg-[#9BDD7C] h-[70px] w-[5px]"></div>
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-[#666666] text-[14px] font-[700]">
            Meeting With Suppliers from Kuta Bali
          </h3>
          <p className="text-[#666666]"> 14:00 - 15:00</p>
          <p className="text-[#666666]"> at sunset road Kuta, Bali</p>
        </div>
      </div>
      
      
      <div className="flex items-center gap-3 mt-3">
        <div className=" bg-[#6972C3] h-[70px] w-[5px]"></div>
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-[#666666] text-[14px] font-[700]">
            Check Operation at Giga Factory 1
          </h3>
          <p className="text-[#666666]"> 18:00 - 20:00</p>
          <p className="text-[#666666]"> at Central Jakarta</p>
        </div>
      </div>


    </div>
  );
};

export default Todayscedule;
