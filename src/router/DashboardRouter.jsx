import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { UsersPage } from "../pages/UsersPage";
import { BrandsPage } from "../pages/BrandsPage";
import { ColorsPage } from "../pages/ColorsPage";
import { ModelsPage } from "../pages/ModelsPage";
import { SizesPage } from "../pages/SizesPage";
import { RolesPage } from "../pages/RolesPage";
import { Navb } from "../components/Navb";
import { RegistersProductsPage } from "../pages/RegistersProductsPage";

export const DashboardRouter = () => {
  return (
    <>
      <Navb />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/registers" element={<RegistersProductsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/sizes" element={<SizesPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="*" element={<>NOT FOUND BRO!</>} />
      </Routes>
    </>
  );
};
