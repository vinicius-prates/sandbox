import axios from "axios";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";

export const UserInfo = () => {
    const [showModal, setShowModal] = useState(false);

    const [newProfileImage, setNewProfileImage] = useState<File | null>()
    const account = useUserStore((state) => state.userAccount);

  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
  }, []);

  const urlUser = `http://localhost:8000/api/client/${account?.client.id}/`
  const changePicture =  () => {

    const fd = new FormData()
    fd.append("image", newProfileImage!)
    
     axios.patch(urlUser, fd ).then((res) => {
        if (res.status == 200){
            navigate("/home")
            Notify.success("You changed your image with success")
        } else {
            Notify.failure("Error. couldn't change the photo.")
            return
        }
     })


  }
    return(
        <div className="md:px-96 h-screen">
            <div>
            <nav className="w-full border-b-1   md:pb-0   bg-opacity-50 backdrop-blur-lg bg-[#e3e3e3]  py-5   shadow flex flex-col gap-4 px-6 ">
                  <h1 className="text-center text-2xl font-bold text-[#19647E]">{account?.client.user_name}</h1>
                <img src={account?.client.image? account?.client.image.toString(): '' } alt="your photo" className="w-52 h-52 self-center object-cover object-center md:my-10 rounded-full border-2 border-[#19647E]"  />
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
            
            <div className="  items-center flex justify-center my-4 md:my-16 ">
                
            <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Change profile picture
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    New profile photo
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                
                  <input type="File" onChange={(evt) => setNewProfileImage(evt.target.files![0])}></input>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setShowModal(false)
                        changePicture()
                    }}
                  >
                    Send new photo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

            </div>
            </div>
        </div>
    )
}