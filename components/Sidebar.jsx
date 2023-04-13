import {FiSettings} from 'react-icons/fi';
import {BsPersonCircle} from 'react-icons/bs';
import {AiOutlineSchedule, AiOutlineDashboard} from 'react-icons/ai';
import {BsTags} from 'react-icons/bs';
import { MdClose } from "react-icons/md";
import Link from 'next/link';

const Sidebar = ({menu, setMenu}) => {
  return (
    <aside className="bg-black text-[white] h-full flex flex-col gap-5 rounded-[30px] px-[40px] lg:pl-[15%] py-10">
      
      <div className='flex items-center justify-between'><h1 className="text-[36px] font-[700]">Board.</h1> <span className='text-3xl font-[700] lg:hidden ' onClick={()=>setMenu(!menu)}><MdClose/></span></div>
      <div className="flex items-center gap-3 cursor-pointer hover:text-[grey] cursor-pointer hover:"><AiOutlineDashboard/> <span className="text-[18px] font-[400] hover:text-[grey]"><Link className='active:font-[700]' href='/dashboard'>Dashboard</Link> </span></div>
      <div className="flex items-center gap-3 cursor-pointer hover:text-[grey] cursor-pointer"><BsTags/><span className="text-[18px] font-[400] hover:text-[grey]">Transactions</span></div>
      <div className=" flex items-center gap-3 cursor-pointer hover:text-[grey] cursor-pointer"><AiOutlineSchedule /> <span className="text-[18px] font-[400] hover:text-[grey]"><Link className='active:font-[700]' href='/dashboard'>Schedules</Link></span></div>
      <div className="flex items-center gap-3 cursor-pointer hover:text-[grey] cursor-pointer"><BsPersonCircle/> <span className="text-[18px] font-[400] hover:text-[grey]">Users</span></div>
      <div className="flex items-center gap-3 cursor-pointer hover:text-[grey]"> <FiSettings/> <span className="text-[18px] font-[400] "> Settings</span> </div>
      <div className="mt-10 lg:mt-auto flex flex-col  gap-3">
        <div className="cursor-pointer text-[16px] font-[400] hover:text-[grey]">Help</div>
        <div className="cursor-pointer text-[16px] font-[400] hover:text-[grey] ">Contact Us</div>
      </div>
    </aside>
  );
};

export default Sidebar;
