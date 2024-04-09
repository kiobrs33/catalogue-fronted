import { Button } from "react-bootstrap";
import { ModelsTable } from "../components/ModelsTable,";

export const ModelsPage = () => {
  return (
    <div className="container py-5">
      <h2>Modelos</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo modelo
        </Button>
      </div>
      <ModelsTable />
    </div>
  );
};
