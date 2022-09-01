import { JustifyManage } from "./pages/justify_manage/JustifyManage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage"
import { RegisterPage } from "./pages/register/RegisterPage";
import { UserJustify } from "./pages/user_justify/UserJustify";
import { ForgotPassword } from "./pages/forgot_password/ForgotPassword";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<JustifyManage />} />
      <Route path="/cadastro" element={<RegisterPage/>} />
      <Route path="/justificativa" element={<UserJustify/>} />
      <Route path="/login/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};