import { CreateModel } from "../components/models/CreateModel";
import { ModelsTable } from "../components/models/ModelsTable";

export const ModelsPage = () => {
  return (
    <div className="container py-5">
      <h2>Modelos</h2>
      <div className="d-flex justify-content-end">
        <CreateModel />
      </div>
      <ModelsTable />
    </div>
  );
};
