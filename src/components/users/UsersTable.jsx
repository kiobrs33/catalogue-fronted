import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditUser } from "./EditUser";
import { Load } from "../Load";

export const UsersTable = () => {
  const { state, handleSetUsers, handleDeleteUser } = useContext(AppContext);

  const [rowData, setRowData] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (role) => {
    setRowData(role);
    setShowModalEdit(true);
  };

  const deleteUser = async (idUser) => {
    try {
      await clientApi.delete(`/users/${idUser}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteUser(idUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idUser) => {
    deleteUser(idUser);
  };

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await clientApi.get("/users", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetUsers(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <EditUser
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />

      {isLoading ? (
        <Load />
      ) : (
        <Table className="my-4 table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres y Apellidos</th>
              <th>Correo</th>
              <th>Role</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <span className="badge text-bg-primary">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </td>
                  <td>{`${user.name} ${user.lastname}`}</td>
                  <td>{user.email}</td>
                  <td>{user.role_id.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleShowModalEdit(user)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
