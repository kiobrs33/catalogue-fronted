import { Button } from "react-bootstrap";
import { BrandsTable } from "../components/BrandsTable";

export const BrandsPage = () => {
  return (
    <div className="container py-5">
      <h2>Marcas</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nueva marca
        </Button>
      </div>
      <BrandsTable />
    </div>
  );
};
