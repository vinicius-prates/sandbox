import { JustifyManage } from "./pages/justify_manage/JustifyManage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admManagePage" element={<JustifyManage />} />
    </Routes>
  );
};
