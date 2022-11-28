import axios from "axios";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";

export const Deposit = () => {
    
    useEffect(() => {
        if (!account) {
        Notify.failure("You need to loggin first!");
        navigate("/login");
        return;
        }
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0)
    const account = useUserStore((state) => state.userAccount);
    const navigate = useNavigate();

    const accUrl = `http://localhost:8000/api/account/${account?.id}/`

    


    const makeDeposit = async () => {
        if (depositAmount > 10000){
            Notify.warning("You can't deposite more than R$10K once a time.")
            return

        }
        
        if(depositAmount <= 0){
          Notify.warning("You to deposit at least R$1.")
          return
        }
        let lastBalance = Number(account?.balance!)
        let amount = Number(depositAmount)
        let finalAmount = lastBalance + amount


        const fd = new FormData()
        fd.append("balance",finalAmount.toString()) 
        axios.patch(accUrl, fd).then((res) => {
            if (res.status == 200) {
                Notify.success('Depósito realizado com sucesso!')
                navigate('/home')

                return
            }
            else{
                Notify.failure('Something went wrong...')
            }
        })
        
    }
  return (
    <div className="flex flex-col w-full justify-center h-screen items-center align-middle">
      <h1 className="text-center font-bold text-4xl text-blue-600 my-6">
        Deposit
      </h1>

      <div className="items-center flex flex-col gap-4">
        <div className="mb-6 flex flex-col gap-8">
        <h1 className="text-lg">How much you would like to depostit?</h1>
          
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-bold opacity-60 text-md italic">R$</h1>
          <input
            type="number"
            max="99999"
            name="balance"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0,00"
            onChange={(evt:any) => setDepositAmount(evt.target.value)}
          />
          
          </div>
        </div>
        <button
            className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase  text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Deposit
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
                        Deposit
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
                    
                      <h1>Do you want to deposit R${depositAmount} ?</h1>
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
                            makeDeposit()
                            setShowModal(false)
                            
                            
                        }}
                      >
                       Deposit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
      </div>
    </div>
  );
};
