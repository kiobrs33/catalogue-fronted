import { Button } from "react-bootstrap";
import { SizesTable } from "../components/SizesTable";

export const SizesPage = () => {
  return (
    <div className="container py-5">
      <h2>Talla</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo talla
        </Button>
      </div>
      <SizesTable />
    </div>
  );
};
