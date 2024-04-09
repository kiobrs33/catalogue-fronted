import Table from "react-bootstrap/Table";

export const UsersTable = () => {
  const brands = [
    {
      _id: "66132d56e18920bbb47fbfa1",
      name: "Rene",
      lastname: "Lozano Ramos",
      email: "rene@gmail.com",
      password: "$2a$10$XaPssF/n6ZD9T.lqzKYGe.CnVTnmKOfGY5eEcaFD8Pwsj3iiLiNwi",
      role_id: "661327f966bde8862f833687",
      deleted: false,
      createdAt: "2024-04-07T23:33:42.942Z",
      updatedAt: "2024-04-07T23:33:42.942Z",
      __v: 0,
    },
    {
      _id: "66132d56e18920bbb47fbfa2",
      name: "Rene",
      lastname: "Lozano Ramos",
      email: "rene@gmail.com",
      password: "$2a$10$XaPssF/n6ZD9T.lqzKYGe.CnVTnmKOfGY5eEcaFD8Pwsj3iiLiNwi",
      role_id: "661327f966bde8862f833687",
      deleted: false,
      createdAt: "2024-04-07T23:33:42.942Z",
      updatedAt: "2024-04-07T23:33:42.942Z",
      __v: 0,
    },
    {
      _id: "66132d56e18920bbb47fbfac",
      name: "Rene",
      lastname: "Lozano Ramos",
      email: "rene@gmail.com",
      password: "$2a$10$XaPssF/n6ZD9T.lqzKYGe.CnVTnmKOfGY5eEcaFD8Pwsj3iiLiNwi",
      role_id: "661327f966bde8862f833687",
      deleted: false,
      createdAt: "2024-04-07T23:33:42.942Z",
      updatedAt: "2024-04-07T23:33:42.942Z",
      __v: 0,
    },
  ];

  return (
    <Table className="my-4 table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombres</th>
          <th>Correo</th>
          <th>Rol</th>
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
              <td>{`${brand.name} ${brand.lastname}`}</td>
              <td>{brand.email}</td>
              <td>{brand.role_id}</td>
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
