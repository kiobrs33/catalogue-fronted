import { RolesTable } from "../components/roles/RolesTable";
import { CreateRole } from "../components/roles/CreateRole";

export const RolesPage = () => {
  return (
    <div className="container py-5">
      <h2>Roles</h2>
      <div className="d-flex justify-content-end">
        <CreateRole />
      </div>
      <RolesTable />
    </div>
  );
};
