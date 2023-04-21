import Link from "next/link";
import { CgSearch } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";


import { BiMenu } from "react-icons/bi";


export const Searchbar = ({menu, setMenu, name}) => {



  return (
    <nav className=" flex justify-between ">
      <div className="flex items-center gap-2">
        <div className=" relative top-[2px] text-[20px] font-[700] cursor-pointer hover:text-[grey] lg:hidden" onClick={()=>setMenu(!menu)}>
        <BiMenu/>
        </div>
        <Link className=" hidden  md:block md:text-[24px] md:font-[700]" href="/">
         Dashboard
        </Link>
      
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center border rounded-[10px] px-2 bg-[white]">
          <input className="outline-none px-[5px] py-[4px]" type="text" name="" id="" placeholder="Search.." />
          <CgSearch className="bg-[white] text-[grey]" />
        </div>

        <FaRegBell className="text-[20px]" />

        <div >
        <Image
          className="object-cover h-[30px] rounded-[50%]"
          src="/profile.jpg"
          width="30"
          height="30"
          alt="img"
        />
        </div>
     
      </div>
    </nav>
  );
};
