import { ColorsTable } from "../components/colors/ColorsTable";
import { CreateColor } from "../components/colors/CreateColor";

export const ColorsPage = () => {
  return (
    <div className="container py-5">
      <h2>Colores</h2>
      <div className="d-flex justify-content-end">
        <CreateColor />
      </div>
      <ColorsTable />
    </div>
  );
};
