import Form from "@/components/Form";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { signIn, signOut } from "next-auth/react"

const TrySignin = () => {
  return (
    <section className="  mx-auto  h-screen bg-[#DDDDDD] flex justify-center items-center">
      <div className="w-[100%] h-[100vh] flex flex-col md:flex-row items-center justify-center ">
        {/* board section starts here */}
        <div className=" text-center w-[100%] md:w-[40%] h-[30%] md:h-screen  bg-[#000000] flex items-center justify-center">
          <h1 className="  text-[#FFFFFF]  text-[50px] font-[500] md:text-[72px]  md:font-[700]">
            Board.
          </h1>
        </div>

        {/*All Authentication section starts here */}
        <div className="w-[100%] md:w-[60%] h-[70%] md:h-screen bg-[#F5F5F5]  flex items-center justify-center ">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-[28px] mt-4 md:mt-0 md:text-[36px] font-[700]">
                Sign in
              </h2>
              <p className=" text-[16px] text-[#000000] font-[400] leading-[12px] mb-1">
                Sign in to your account
              </p>
            </div>

            <div className="flex gap-5">
              <div  className="text-[12px] text-[#858585;] font-[400] px-4 py-1 bg-[#FFFFFF] flex items-center gap-2 rounded-[10px] cursor-pointer">
                <FcGoogle className="text-[16px]" />
                <span onClick={()=>signIn('google')}>Sign in with google</span>
              </div>
              <div className="text-[12px] text-[#858585;] font-[400] px-4 py-1 bg-[#FFFFFF] flex items-center gap-2 rounded-[10px] cursor-pointer">
                <FaApple className="text-[16px]" />
                <span>Sign in with Apple</span>
              </div>
            </div>

            {/* Sign in form component embeded here */}
            <Form />

            <div className="self-center">
              {" "}
              <span className="text-[16px] font-[400] text-[#858585]">
                {`Don't have an account?`}
              </span>
              <span className="text-[#346BD4] cursor-pointer hover:text-blue-800">
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrySignin;
