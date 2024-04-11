import { CreateSize } from "../components/sizes/CreateSize";
import { SizesTable } from "../components/sizes/SizesTable";

export const SizesPage = () => {
  return (
    <div className="container py-5">
      <h2>Talla</h2>
      <div className="d-flex justify-content-end">
        <CreateSize />
      </div>
      <SizesTable />
    </div>
  );
};
