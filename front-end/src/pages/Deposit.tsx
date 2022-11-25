import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";

export const Deposit = () => {
    const [depositAmount, setDepositAmount] = useState("")

    const account = useUserStore((state) => state.userAccount);

    const navigate = useNavigate();
    useEffect(() => {
        if (!account) {
        Notify.failure("You need to loggin first!");
        navigate("/login");
        return;
        }
    }, []);

    const onInputChange = (evt: any) => {
         setDepositAmount(evt.target.value)
         console.log(account?.id)
    }
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-blue-600 my-6">
        Deposit
      </h1>

      <div>
        <h1>How much you would like to depostit?</h1>
        <div className="mb-6">
          <label
            htmlFor="balance"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="decimal"
            name="balance"
            value={depositAmount}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="R$ 0,00"
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
};
