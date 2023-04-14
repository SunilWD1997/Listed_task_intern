import Activities from "@/components/Activities";
import Card from "@/components/Card";
import { Searchbar } from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";
import Todayscedule from "@/components/Todayscedule";
import Topproducts from "@/components/Topproducts";
import { CardData } from "@/components/CardData";
import { useState } from "react";

const Dashboard = () => {

const [menu, setMenu]= useState(true)

  return (
    <section className=" py-[26px]  lg:h-screen  bg-[#F5F5F5]">
      <div className=" max-w-[1440px] mx-auto  flex gap-10">
        <div className=" hidden lg:block lg:w-[18%]">
          <Sidebar  />
        </div>
        <div className= {` z-10 w-[100vw] duration-200  fixed ${menu?`left-[100%]`:`left-[0%]`}  lg:hidden`}>
          <Sidebar menu={menu} setMenu={setMenu} />
        </div>
       
        <div className=" mx-auto w-[95%] lg:w-[75%] flex flex-col gap-8 py-[20px]">
          <div >
            <Searchbar  menu={menu} setMenu={setMenu}/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CardData?.map((item) => {
              return <Card key={item.id} item={item}/>
            })}
          
          </div>

          <div>
            <Activities />
          </div>

          <div className="bg-[#F5F5F5] grid md:grid-cols-1 lg:grid-cols-2 gap-7">
            <Topproducts />
            <Todayscedule />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
