import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </>
  );
};
