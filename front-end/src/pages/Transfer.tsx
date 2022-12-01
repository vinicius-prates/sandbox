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
  const [ recieverData, setRecieverData] = useState({
    agency:  "",
    account: "",
    balance: 0,
    client: null

  })
  const accountsUrl = "http://localhost:8000/api/account/"
  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
    axios.get(accountsUrl).then(res => setAccounts(res.data))
  }, []);

  const makeTransfer = () => {
      axios.get(`http://localhost:8000/api/account/${reciever}`).then((res) => { setRecieverData(res.data)})
      let newBalance = Number(account?.balance) - amountTransfer
      let newBalanceRec = Number(recieverData.balance) + amountTransfer

      const fd2 = new FormData()
      const fd = new FormData()
      
      fd.append("balance", newBalance.toString())
      fd2.append("balance", newBalanceRec.toString( ))

      axios.patch(`http://localhost:8000/api/account/${account?.id}/`, fd).then((res) => {
        if (res.status == 200){

          axios.patch(`http://localhost:8000/api/account/${reciever}/`, fd2).then((res) => {
            if (res.status == 200){
              Report.success('Transfer',
          `You transfered the amount of ${amountTransfer}`,
          `Ok!`)
          fetchAccount(account!.id)
          navigate(`/home`)
            }
          })
        }
        else{
          Notify.failure("Something went wrong!")
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
