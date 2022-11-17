import axios from "axios";
import { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useNavigate } from "react-router-dom";
import { Account, ClientProps } from "../props/ClientProps";
import { UserProps } from "../props/userProps";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useUserStore } from '../userStore';

const clientUrl = "http://localhost:8000/api/client/";
const userUrl = "http://localhost:8000/api/user/";
const accUrl = "http://localhost:8000/api/account/"
export const Register = () => {
  const setAccount = useUserStore(state => state.setAccount)
  const navigate = useNavigate();
  const [confPass, setConfPass] = useState<string>('')
  const [newClientData, setNewClientData] = useState<ClientProps>({
    user_name: "",
    user: "",
    birth_date: "",
    phone_number: "",
    good_client: true,
    sexo: "M",
    email: "",
  });
  const [newUserData, setNewUserData] = useState<UserProps>({
    cpf: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onInputChangeClient = (evt: any) => {
    setNewClientData({ ...newClientData, [evt.target.name]: evt.target.value });
  };

  const onInputChangeCpf = (evt: any) => {
    setNewClientData({ ...newClientData, ["user"]: newUserData.cpf });
  };

  const onInputChangeUser = (evt: any) => {
    setNewUserData({ ...newUserData, [evt.target.name]: evt.target.value });
    onInputChangeCpf(evt);
    
  };

  const validateForm = (event: any) => {
    event?.preventDefault();
    if (newClientData.user_name.length <= 0) {
      Notify.failure("User name field is empty.");
      return;
    }
    if (newUserData.cpf.length <= 0) {
      Notify.failure("CPF field is empty.");
      return;
    }
    if (newClientData.phone_number.length <= 0) {
      Notify.failure("Phone number field is empty.");
      return;
    }
    if (newClientData.email.length < 0) {
      Notify.failure("Email field is empty.");
      return;
    }
    if (newUserData.password.length <= 0) {
      Notify.failure("Password field is empty.");
      return;
    }
    if (newUserData.password != confPass){
      Notify.failure('The passwords are not equal.')
      return;
    }
    postUser(event);
  };

  const postUser = async (event: any) => {
    event?.preventDefault();
    setIsLoading(true);
    const fd = new FormData();
    fd.append("user_name", newClientData.user_name);
    fd.append("email", newClientData.email);
    fd.append("sexo", newClientData.sexo);
    fd.append("phone_number", newClientData.phone_number);
    fd.append("user", newClientData.user);
    fd.append("birth_date", newClientData.birth_date);

    console.log(newUserData);
    console.log(newClientData);

    const resUser = await axios.post(userUrl, newUserData);
    const resCli = await axios.post(clientUrl, fd);
    const resAcc = await axios.post(accUrl, { client: resCli.data.id })
    setIsLoading(false);

    if (resUser.status == 201 && resCli.status == 201 && resAcc.status == 201) {
      setAccount(resAcc.data as Account)
      navigate(`/${newUserData.cpf}/home`);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="px-10 py-10 md:px-96">
      <div className="flex flex-row gap-1">
        <h1 className="flex gap-1 text-3xl font-bold "> New Here?</h1>
        <h1 className="font-bold text-blue-600 text-3xl "> Register!</h1>
      </div>
      <form className="my-5" onSubmit={validateForm}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Name
            </label>
            <input
              type="text"
              name="user_name"
              onChange={onInputChangeClient}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 focus:outline-none block w-full p-2.5 "
              placeholder="Toguro"
            />
          </div>

          <div>
            <label
              htmlFor="cpf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CPF
            </label>
            <input
              type="text"
              name="cpf"
              onChange={onInputChangeUser}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="000.000.000-00"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="text"
              name="phone_number"
              onChange={onInputChangeClient}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
            />
          </div>
          <div>
            <label
              htmlFor="sex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sex
            </label>
            <select
              name="sexo"
              onChange={onInputChangeClient}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whitefocus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>M</option>
              <option>F</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Birth Date
            </label>
            <input
              type="date"
              name="birth_date"
              onChange={onInputChangeClient}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={onInputChangeClient}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="toguro@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={onInputChangeUser}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            value={confPass}
            onChange={(evt) => setConfPass(evt.target.value) }
            type="password"
            name="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
          />
        </div>
        <div className="flex items-start mb-6">
          <label
            htmlFor="login"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Already have a account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline dark:text-blue-500 font-bold"
            >
              Click Here
            </a>
            .
          </label>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};
