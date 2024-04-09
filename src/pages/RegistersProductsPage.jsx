import { Button } from "react-bootstrap";
import { RegistersProductsTable } from "../components/RegistersProductsTable";

export const RegistersProductsPage = () => {
  return (
    <div className="container py-5">
      <h2>Registros de productos</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo registro
        </Button>
      </div>
      <RegistersProductsTable />
    </div>
  );
};
