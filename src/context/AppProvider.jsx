import { useReducer } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";
import { appReducer, initFunc, initialState } from "../reducer/appReducer";
import { types } from "../types/types";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initFunc);

  // TODO AUTH
  const handleLogin = (user) => {
    console.log("HABDLE LOGIN", user);
    dispatch({
      type: types.LOGIN_USER,
      payload: { user },
    });
  };
  const handleLogout = () => {
    dispatch({
      type: types.LOGOUT_USER,
    });
  };

  // TODO ROLES
  const handleSetRoles = (roles) => {
    dispatch({
      type: types.SET_ROLES,
      payload: { roles },
    });
  };
  const handleCreateRole = (role) => {
    dispatch({
      type: types.CREATE_ROLE,
      payload: { role },
    });
  };
  const handleUpdateRole = (role) => {
    dispatch({
      type: types.UPDATE_ROLE,
      payload: { role },
    });
  };
  const handleDeleteRole = (id) => {
    dispatch({
      type: types.DELETE_ROLE,
      payload: { id },
    });
  };

  // TODO BRANDS
  const handleSetBrands = (brands) => {
    dispatch({
      type: types.SET_BRANDS,
      payload: { brands },
    });
  };
  const handleCreateBrand = (brand) => {
    dispatch({
      type: types.CREATE_BRAND,
      payload: { brand },
    });
  };
  const handleUpdateBrand = (brand) => {
    dispatch({
      type: types.UPDATE_BRAND,
      payload: { brand },
    });
  };
  const handleDeleteBrand = (id) => {
    dispatch({
      type: types.DELETE_BRAND,
      payload: { id },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        handleLogin,
        handleLogout,

        handleSetRoles,
        handleCreateRole,
        handleUpdateRole,
        handleDeleteRole,

        handleSetBrands,
        handleCreateBrand,
        handleUpdateBrand,
        handleDeleteBrand,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
