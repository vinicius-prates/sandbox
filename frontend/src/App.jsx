import { JustifyManage } from "./pages/justify_manage/JustifyManage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage"
import { RegisterPage } from "./pages/register/RegisterPage";
import { UserJustify } from "./pages/user_justify/UserJustify";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<JustifyManage />} />
      <Route path="/cadastro" element={<RegisterPage/>} />
      <Route path="/justify" element={<UserJustify/>} />
    </Routes>
  );
};