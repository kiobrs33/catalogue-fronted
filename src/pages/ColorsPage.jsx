import { Button } from "react-bootstrap";
import { ColorsTable } from "../components/ColorsTable";

export const ColorsPage = () => {
  return (
    <div className="container py-5">
      <h2>Colores</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo color
        </Button>
      </div>
      <ColorsTable />
    </div>
  );
};
