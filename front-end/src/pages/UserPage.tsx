import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../userStore";
import logo from "../assets/logo.jpg";
import transferIcon from "../assets/Initiate Money Transfer.png"
import depositIcon from "../assets/Request Money.png"
import cashHandIcon from "../assets/Cash in Hand.png"
import moneyBagIcon from "../assets/Money Bag.png"

import { Card } from "react-pay-card";
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
    <div className="bg-white h-screen md:mx-96">
      {/* Div NavBar */}
      <nav className="w-full border-b-1   md:pb-0   bg-opacity-50 backdrop-blur-lg bg-[whitesmoke]  shadow flex flex-row px-6 py-2">
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-row gap-1">
            <h1 className="font-bold text-lg">Welcome,</h1>
            <Link to="/home/user-info" className="text-[#19647E] text-lg italic font-bold">
              {account?.client.user_name}.
            </Link>
          </div>

          <div className="flex flex-row gap-1">
            <h1 className="font-bold text-md">Agency - </h1>
            <h1 className="text-[#19647E] italic font-bold">
              {account?.agency}
            </h1>
          </div>
          {/* Div Balance */}
          <div className="flex flex-row gap-1">
            <h1 className="font-bold text-md">Account -</h1>
            <h1 className="text-[#19647E] italic font-bold">
              {account?.account}
            </h1>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col text-right justify-center items-end gap-2">
          <img src={logo} alt="logo" className="w-12" />
        </div>
      </nav>

      <div className="bg-[#19647E]  mx-6 my-10 rounded-lg p-4">
        <h1 className="text-xl font-bold text-[whitesmoke]">Balance</h1>
        <h1 className="text-lg italic text-[whitesmoke]">
          R$ {account?.balance}
        </h1>
      </div>

      {/* Div Cards */}
      <div className="border-t-1 bg-white px-10 py-6  flex flex-col gap-4 border-t-2  ">
        <h1 className="font-bold text-xl">Your Cards</h1>
        <Card
          cardCvv="123"
          cardMonth="22"
          cardYear="32"
          cardNumber="3437 5401 9182 4751"
          cardHolder="Vinicius Prates"
          
        />
        <button className="bg-[#19647E] font-bold text-xl text-[whitesmoke]  rounded-xl py-4 w-40 self-center transition-all hover:bg-[#3c96b4]">
          New Card
        </button>
      </div>

      <div className="flex flex-col bg-white m-auto p-auto border-t-2">
        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Actions
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:mx-auto md:ml-20 ml-10 mr-10   ">
            <div className="inline-block px-3">
              <Link to="/home/transfer">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#e3e3e3]  hover:shadow-xl transition-shadow items-center justify-center flex flex-col  duration-300 ease-in-out">
                <img src={transferIcon} className="w-20 h-20"/>
                <h1 className="text-[#19647E] font-bold text-lg">Transfer</h1>
              </div>
              </Link>
            </div>
            <div className="inline-block px-3">
            <Link to="/home/deposit">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl shadow-md flex-col bg-[#e3e3e3] hover:shadow-xl transition-shadow items-center justify-center flex  duration-300 ease-in-out">
                <img src={depositIcon} className="w-20 h-20"/>
                <h1 className="text-[#19647E] font-bold text-lg">Deposit</h1>
              </div>
            </Link>
            </div>
            <div className="inline-block px-3">
              <Link to="">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl shadow-md flex-col bg-[#e3e3e3] hover:shadow-xl transition-shadow items-center justify-center flex  duration-300 ease-in-out">
              <img src={cashHandIcon} className="w-20 h-20"/>
              <h1 className="text-[#19647E] font-bold text-lg">Advance</h1>
              </div>
              </Link>
            </div>
            <div className="inline-block px-3">
            <Link to="">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl flex-col shadow-md bg-[#e3e3e3] hover:shadow-xl transition-shadow items-center justify-center flex   duration-300 ease-in-out">
                <img src={moneyBagIcon} className="w-20 h-20"/>
                <h1 className="text-[#19647E] font-bold text-lg">Draw</h1>
              </div>
              </Link>
            </div>
            <div className="inline-block px-3">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#e3e3e3] hover:shadow-xl transition-shadow items-center justify-center flex duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-32 h-32 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#e3e3e3] hover:shadow-xl transition-shadow  items-center justify-center flex duration-300 ease-in-out"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
