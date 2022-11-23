import { Notify } from "notiflix";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";

export const UserInfo = () => {
    const account = useUserStore((state) => state.userAccount);

  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
  }, []);

    return(
        <div>
            <div>
            <nav className="w-full border-b-1   md:pb-0   bg-opacity-50 backdrop-blur-lg bg-[#e3e3e3]  py-5  shadow flex flex-col gap-4 px-6 ">
                  <h1 className="text-center text-2xl font-bold text-[#19647E]">{account?.client.user_name}</h1>
                <img src={account?.client.image} alt="" className="w-52 h-52 self-center   rounded-full border-2 border-[#19647E]"  />
            </nav>
            <div className="px-8 py-6 border-b-2">
                <h1 className="text-center mb-10 text-3xl font-bold text-[#19647E] ">Account Info</h1>
                <div className="flex flex-row justify-between text-xl  ">
                    <h1>CPF</h1><h1 className="text-[#19647E]  italic opacity-80">{account?.client.user}</h1>
                </div>

                <div className="flex flex-row justify-between text-xl ">
                    <h1>Email</h1><h1 className="text-[#19647E] italic opacity-80">{account?.client.email}</h1>        
                </div>
                <div className="flex flex-row justify-between text-xl ">
                    <h1>Number</h1><h1 className="text-[#19647E]  italic opacity-80">{account?.client.phone_number}</h1>
                </div>
                <div className="flex flex-row justify-between text-xl ">
                    <h1>Sex</h1><h1 className="text-[#19647E]  italic opacity-80">{account?.client.sexo}</h1>
                </div>
                <div className="flex flex-row justify-between text-xl">
                    <h1>Birth Date</h1><h1 className="text-[#19647E]  italic opacity-80">{account?.client.birth_date}</h1>     
                </div>
            </div>

            <div className="px-8 py-6 border-b-2">

                <h1 className="text-center mb-10 text-3xl font-bold text-[#19647E] ">Bank Info</h1>
                <div className="flex flex-row justify-between text-xl">
                    <h1>Agency</h1><h1 className="text-[#19647E] italic opacity-80">{account?.agency}</h1>
                </div>
                <div className="flex flex-row justify-between text-xl">
                    <h1>Account </h1><h1 className="text-[#19647E] italic opacity-80">{account?.account}</h1>
                </div>
                <div className="flex flex-row justify-between text-xl">
                    <h1>Joined Exo at</h1><h1 className="text-[#19647E] italic opacity-80">{account?.client.created_at}</h1>
                </div>

            </div>
            
            <div className=" h-full items-center flex justify-center my-6">
                
                <button className="text-[#19647E] underline "> Change photo</button>
            </div>
            </div>
        </div>
    )
}