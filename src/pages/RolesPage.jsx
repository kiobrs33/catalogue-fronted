import { Button } from "react-bootstrap";
import { RolesTable } from "../components/RolesTable";

export const RolesPage = () => {
  return (
    <div className="container py-5">
      <h2>Roles</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo rol
        </Button>
      </div>
      <RolesTable />
    </div>
  );
};
