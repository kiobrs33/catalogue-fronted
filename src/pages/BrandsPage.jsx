import { BrandsTable } from "../components/brands/BrandsTable";
import { CreateBrand } from "../components/brands/CreateBrand";

export const BrandsPage = () => {
  return (
    <div className="container py-5">
      <h2>Marcas</h2>
      <div className="d-flex justify-content-end">
        <CreateBrand />
      </div>
      <BrandsTable />
    </div>
  );
};
