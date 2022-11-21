import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../userStore";
import logo from "../assets/logo.jpg" 
import { Card } from "react-pay-card"
export const UserPage = () => {
  const account = useUserStore((state) => state.userAccount);

  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="bg-white h-screen md:mx-96" >
      {/* Div NavBar */}
      <nav className="w-full border-b-1   md:pb-0   bg-opacity-50 backdrop-blur-lg bg-[whitesmoke]  shadow flex flex-row px-6 py-2">
        <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row gap-1">

          <h1 className="font-bold text-lg">Welcome,</h1>
          <h1 className="text-[#19647E] text-lg italic font-bold">{account?.client.user_name}.</h1>

            </div>

            <div className="flex flex-row gap-1">

                <h1 className="font-bold text-md">Agency - </h1>
                <h1 className="text-[#19647E] italic font-bold">{account?.agency}</h1>
            </div>
            {/* Div Balance */}
            <div className="flex flex-row gap-1">

                <h1 className="font-bold text-md">Account -</h1>
                <h1 className="text-[#19647E] italic font-bold">{account?.account}</h1>

            </div>
            <div>
            </div>
        </div>



        <div className="flex flex-col text-right justify-center items-end gap-2">
        <img src={logo} alt="logo" className="w-12"/>
          
        </div>
      </nav>


      <div className="bg-[#19647E]  mx-6 my-10 rounded-lg p-4">
        <h1 className="text-xl font-bold text-[whitesmoke]">Balance</h1>
        <h1 className="text-lg italic text-[whitesmoke]">R$ {account?.balance}</h1>
      
      </div>
       
      {/* Div Cards */} 
      <div className="border-t-1 bg-white px-10 py-6  flex flex-col gap-4 border-t-2  ">
        <h1 className="font-bold text-xl">Your Cards</h1>
          <Card cardCvv="123" cardMonth="22" cardYear="32" cardNumber="1234540191824751" cardHolder="Vinicius Prates" key={1} />
        <button className="bg-[#19647E] font-bold text-xl text-[whitesmoke]  rounded-xl py-4 w-40 self-center transition-all hover:bg-[#3c96b4]">
          New Card
        </button>
      </div>
    </div>
  );
};
