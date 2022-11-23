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
            <div className="mx-8 my-10">
                <div className="flex flex-row justify-between text-xl font-bold ">
                    <h1>CPF</h1><h1 className="text-[#19647E]">{account?.client.user}</h1>
                </div>

                <div className="flex flex-row justify-between text-xl font-bold">
                    <h1>Email</h1><h1 className="text-[#19647E]">{account?.client.email}</h1>        
                </div>
                <div className="flex flex-row justify-between text-xl font-bold">
                    <h1>Number</h1><h1 className="text-[#19647E]">{account?.client.phone_number}</h1>
                </div>
                <div className="flex flex-row justify-between text-xl font-bold">
                    <h1>Sex</h1><h1 className="text-[#19647E]">{account?.client.sexo}</h1>
                </div>
            </div>

            </div>
        </div>
    )
}