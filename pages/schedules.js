import Activities from "@/components/Activities";
import Card from "@/components/Card";
import { Searchbar } from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";


import { CardData } from "@/components/CardData";
import { useState } from "react";

const Dashboard = () => {

const [menu, setMenu]= useState(true);
const [name, setName]= useState('Dashboard');

  return (
    <section className=" py-[20px]  lg:h-screen  bg-[#F5F5F5]">
      <div className=" max-w-[1440px] mx-auto  flex gap-5">
        <div className=" hidden lg:block lg:w-[18%]">
          <Sidebar  />
        </div>
        <div className= {` z-10 w-[100vw] px-[10px] duration-200  fixed ${menu?`left-[100%]`:`left-[0%]`}  lg:hidden`}>
          <Sidebar   setName={setName} menu={menu} setMenu={setMenu} />
        </div>
       
        <div className=" mx-auto w-[95%] lg:w-[75%] flex flex-col gap-5 py-[10px]">
          <div >
            <Searchbar  menu={menu} setMenu={setMenu} name={name}/>
          </div>

          <p>Schedules</p>

          <div>
            <Activities />
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
