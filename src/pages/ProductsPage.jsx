import { CreateProduct } from "../components/products/CreateProduct";
import { ProducsTable } from "../components/products/ProductsTable";

export const ProductsPage = () => {
  return (
    <div className="container py-5">
      <h2>Productos</h2>
      <div className="d-flex justify-content-end">
        <CreateProduct />
      </div>
      <ProducsTable />
    </div>
  );
};
