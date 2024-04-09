import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditColor } from "./EditColor";

export const ColorsTable = () => {
  const { state, handleSetColors, handleDeleteColor } = useContext(AppContext);

  const [rowData, setRowData] = useState({});

  // ROLE EDIT MODAL
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    getColors();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (color) => {
    setRowData(color);
    setShowModalEdit(true);
  };

  const deleteRole = async (idColor) => {
    try {
      await clientApi.delete(`/colors/${idColor}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteColor(idColor);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idColor) => {
    deleteRole(idColor);
  };

  const getColors = async () => {
    try {
      const { data } = await clientApi.get("/colors", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetColors(data.colors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditColor
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />
      <Table className="my-4 table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.colors.map((color) => {
            return (
              <tr key={color._id}>
                <td>
                  <span className="badge text-bg-primary">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </td>
                <td>{color.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => handleShowModalEdit(color)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(color._id)}
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
