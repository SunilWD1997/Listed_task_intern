import React from "react";

const Form = () => {
  return (
    <form action="" className=" bg-[#FFFFFF] flex flex-col gap-4 rounded-[10px] p-5">

      {/* Enter email address field starts here */}
      <div className="flex flex-col">
        <label htmlFor="" className="text-[16px] font-[400] mb-1">Email address</label>
        <input
          type="text"
          className="px-[10px] py-[5px]   border rounded-[10px]"
          name=""
          id=""
          autoComplete="off"
          placeholder="Enter your Email..."
        />
      </div>

      {/* password field starts here */}
      <div className="flex flex-col">
        <label htmlFor="" className="text-[16px] font-[400] mb-1">Password</label>
        <input
          type="password"
          className=" px-[10px] py-[5px]  border rounded-[10px]"
          name=""
          id=""
          autoComplete="off"
          placeholder="Enter your Password..."
        />
      </div>

      {/* Forgot password starts here */}
      <p className=" text-[16px] font-[400] text-[#346BD4] cursor-pointer hover:text-blue-800">Forgot Password</p>

      {/* sign button starts here */}
      <button className="w-full self-center text-[16px] font-[700] py-[7px] text-[#FFFFFF]  bg-[#000000] rounded-[10px] "> Sign In</button>
    </form>
  );
};

export default Form;
