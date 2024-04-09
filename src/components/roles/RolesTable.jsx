import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditRole } from "./EditRole";

export const RolesTable = () => {
  const { state, handleSetRoles, handleDeleteRole } = useContext(AppContext);

  const [rowData, setRowData] = useState({});

  // ROLE EDIT MODAL
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    getRoles();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (role) => {
    setRowData(role);
    setShowModalEdit(true);
  };

  const deleteRole = async (idRole) => {
    try {
      await clientApi.delete(`/roles/${idRole}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteRole(idRole);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idRole) => {
    deleteRole(idRole);
  };

  const getRoles = async () => {
    try {
      const { data } = await clientApi.get("/roles", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetRoles(data.roles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditRole
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />
      <Table className="my-4 table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.roles.map((role) => {
            return (
              <tr key={role._id}>
                <td>
                  <span className="badge text-bg-primary">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </td>
                <td>{role.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => handleShowModalEdit(role)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(role._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
