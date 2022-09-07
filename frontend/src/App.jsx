import { JustifyManage } from "./pages/justify_manage/JustifyManage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage"
import { RegisterPage } from "./pages/register/RegisterPage";
import { UserJustify } from "./pages/user_justify/UserJustify";
import { ForgotPassword } from "./pages/forgot_password/ForgotPassword";
import { MinhasJustificativas } from "./pages/minhas_justificativas/MinhasJustificativas";
import { EasterEgg } from "./pages/easter_egg/EasterEgg";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<JustifyManage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/justificativa" element={<UserJustify />} />
      <Route path="/login/forgotPassword" element={<ForgotPassword />} />
      <Route path="/minhas-justificativas" element={<MinhasJustificativas />} />
      <Route path="/developers" element={<EasterEgg/>}/>
    </Routes>
  );
};