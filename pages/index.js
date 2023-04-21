import Activities from "@/components/Activities";
import Card from "@/components/Card";
import { Searchbar } from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";
import Todayscedule from "@/components/Todayscedule";
import Topproducts from "@/components/Topproducts";

import { CardData } from "@/components/CardData";
import { useState } from "react";

import Login from '@/components/login';

import { useSession } from "next-auth/react"



const Dashboard = () => {


const {data: session} = useSession();

if(session == null){
  return <Login/>
}


const [menu, setMenu]= useState(true);


  return (
    <section className=" py-[20px]  lg:h-screen  bg-[#F5F5F5]">
      <div className=" w-[99%] md:w-[96%] mx-auto  flex gap-5">
        <div className=" hidden lg:block lg:w-[18%]">
          <Sidebar  />
        </div>
        <div className= {` z-10 w-[100vw] px-[10px] duration-200  fixed ${menu?`left-[100%]`:`left-[0%]`}  lg:hidden`}>
          <Sidebar    menu={menu} setMenu={setMenu} />
        </div>
       
        <div className=" mx-auto w-[95%] lg:w-[75%] flex flex-col gap-8 py-[10px]">
          <div >
            <Searchbar  menu={menu} setMenu={setMenu} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {CardData?.map((item) => {
              return <Card key={item.id} item={item}/>
            })}
          
          </div>

          <div>
            <Activities />
          </div>

          <div className="bg-[#F5F5F5] grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-14 ">
            <Topproducts />
            <Todayscedule />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;






































































// import Form from "@/components/Form";
// import {FcGoogle} from 'react-icons/fc';
// import {FaApple} from 'react-icons/fa';

// const Signin = () => {
//   return (
    
//     <section className="  mx-auto  h-screen bg-[#DDDDDD] flex justify-center items-center">
//       <div className="w-[100%] h-[100vh] flex flex-col md:flex-row items-center justify-center ">
//         {/* board section starts here */}
//         <div className=" text-center w-[100%] md:w-[40%] h-[30%] md:h-screen  bg-[#000000] flex items-center justify-center">
//           <h1 className="  text-[#FFFFFF]  text-[50px] font-[500] md:text-[72px]  md:font-[700]">Board.</h1>
//         </div>

//         {/*All Authentication section starts here */}
//         <div className="w-[100%] md:w-[60%] h-[70%] md:h-screen bg-[#F5F5F5]  flex items-center justify-center ">
//           <div className="flex flex-col gap-5">
//             <div>
//             <h2 className="text-[28px] mt-4 md:mt-0 md:text-[36px] font-[700]">Sign in</h2>
//             <p className=" text-[16px] text-[#000000] font-[400] leading-[12px] mb-1">Sign in to your account</p>
//             </div>
           
//             <div className="flex gap-5">
//               <div className="text-[12px] text-[#858585;] font-[400] px-4 py-1 bg-[#FFFFFF] flex items-center gap-2 rounded-[10px] cursor-pointer"><FcGoogle className="text-[16px]"/><span>Sign in with google</span> </div>
//               <div className="text-[12px] text-[#858585;] font-[400] px-4 py-1 bg-[#FFFFFF] flex items-center gap-2 rounded-[10px] cursor-pointer"><FaApple className="text-[16px]"/> <span>Sign in with Apple</span> </div>
//             </div>

//             {/* Sign in form component embeded here */}
//             <Form />


//             <div className="self-center"> <span className="text-[16px] font-[400] text-[#858585]">{`Don't have an account?`} </span><span className="text-[#346BD4] cursor-pointer hover:text-blue-800">Register here</span></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signin;
