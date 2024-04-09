import Table from "react-bootstrap/Table";

export const SizesTable = () => {
  const brands = [
    {
      _id: "66133909689716774b88460f",
      name: "Adidas LZ",
      deleted: false,
      createdAt: "2024-04-08T00:23:37.417Z",
      updatedAt: "2024-04-08T00:23:37.417Z",
      __v: 0,
    },
    {
      _id: "6613393a6bc85c35547f2266",
      name: "Zeuz Corp",
      deleted: false,
      createdAt: "2024-04-08T00:24:26.800Z",
      updatedAt: "2024-04-08T00:27:09.146Z",
      __v: 0,
    },
    {
      _id: "6613396ac1f9522996036455",
      name: "Adidas LZ",
      deleted: false,
      createdAt: "2024-04-08T00:25:14.511Z",
      updatedAt: "2024-04-08T00:25:14.511Z",
      __v: 0,
    },
  ];

  return (
    <Table className="my-4 table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Talla</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brand) => {
          return (
            <tr key={brand._id}>
              <td>
                <span className="badge text-bg-primary">
                  <i className="fa-solid fa-user"></i>
                </span>
              </td>
              <td>{brand.name}</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm  me-2">
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button type="button" className="btn btn-secondary btn-sm me-2">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
