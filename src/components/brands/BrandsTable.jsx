import Table from "react-bootstrap/Table";
import { clientApi } from "../../api/clientApi";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { EditBrand } from "./EditBrand";

export const BrandsTable = () => {
  const { state, handleSetBrands, handleDeleteBrand } = useContext(AppContext);

  const [rowData, setRowData] = useState({});

  // ROLE EDIT MODAL
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    getBrands();
  }, []);

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModalEdit = (brand) => {
    setRowData(brand);
    setShowModalEdit(true);
  };

  const deleteBrand = async (idBrand) => {
    try {
      await clientApi.delete(`/brands/${idBrand}`, {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleDeleteBrand(idBrand);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (idBrand) => {
    deleteBrand(idBrand);
  };

  const getBrands = async () => {
    try {
      const { data } = await clientApi.get("/brands", {
        headers: {
          "x-token": state.auth?.token,
        },
      });

      handleSetBrands(data.brands);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditBrand
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />
      <Table className="my-4 table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.brands.map((brand) => {
            return (
              <tr key={brand._id}>
                <td>
                  <span className="badge text-bg-primary">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </td>
                <td>{brand.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => handleShowModalEdit(brand)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(brand._id)}
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
