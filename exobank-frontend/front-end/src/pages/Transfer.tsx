import axios from "axios";
import { Notify, Report } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";
import { Account, ClientProps } from "../props/ClientProps"
export const Transfer = () => {
  const { account, fetchAccount } = useUserStore(({ fetchAccount, userAccount }) => ({ account: userAccount, fetchAccount }));
  const [ accounts, setAccounts ] = useState([])
  const [ reciever, setReciever] = useState(1)
  const [ amountTransfer, setAmountTransfer] = useState(0)

  const accountsUrl = "http://localhost:8000/api/account/"
  const transferUrl = "http://localhost:8000/api/transfers/"

  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
    axios.get(accountsUrl).then(res => setAccounts(res.data))
  }, []);

  const makeTransfer = async () => {

    const fd = new FormData()
    fd.append("user_transfer", account!.id.toString())
    fd.append("user_receive", reciever.toString())
    fd.append("value_transfer", amountTransfer.toString())
      axios.post(transferUrl, fd ).then((res) => {
        console.log(res.data)
        if (res.status == 201){
          Report.success(`Transfer`,`You transfer of  R$ ${amountTransfer}, was made.`,`Ok!`)
          navigate('/home')
        } else {
          Report.failure(`Transfer`, `Something wen't wrong...`, `Ok.`)
          return
        }
      })
  }



  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-4xl text-blue-600 my-6">
        Transfer
      </h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center ">
        <div className=" flex flex-col gap-8 ">
          <h1 className="text-xl ">Amount you're transfering</h1>
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-bold opacity-60 text-md italic">R$</h1>
            <input
              type="number"
              max="99999"
              name="balance"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0,00"
              onChange={(evt:any) => {
                setAmountTransfer(evt.target.value)
              }}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-8 ">
          <h1 className="text-xl ">Reciever</h1>
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-bold opacity-60 text-md italic">Account</h1>
            
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(evt) => {
            setReciever(evt.target.value)
            console.log(reciever)
            }}>
              {accounts.map((acc:any) => {
                return(
                  <option value={acc.id} id={acc.id} className="">
                    {acc.account} - {acc.client.user_name}
                  </option>
                )
              })}
            </select>  
          </div>
        </div>
      </div>
        <button className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase  text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 my-10" onClick={makeTransfer}>Transfer</button>
    </div>
  );
};
