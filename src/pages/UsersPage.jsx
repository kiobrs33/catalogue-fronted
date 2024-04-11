import { CreateUser } from "../components/users/CreateUser";
import { UsersTable } from "../components/users/UsersTable";

export const UsersPage = () => {
  return (
    <div className="container py-5">
      <h2>Usuarios</h2>
      <div className="d-flex justify-content-end">
        <CreateUser />
      </div>
      <UsersTable />
    </div>
  );
};
