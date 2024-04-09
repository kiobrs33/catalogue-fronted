import { Button } from "react-bootstrap";
import { UsersTable } from "../components/UsersTable";

export const UsersPage = () => {
  return (
    <div className="container py-5">
      <h2>Usuarios</h2>
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <i className="fa-solid fa-circle-plus"></i> Nuevo usuario
        </Button>
      </div>
      <UsersTable />
    </div>
  );
};
