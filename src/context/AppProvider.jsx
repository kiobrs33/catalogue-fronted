import { useReducer } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";
import { appReducer, initFunc, initialState } from "../reducer/appReducer";
import { types } from "../types/types";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initFunc);

  // TODO AUTH
  const handleLogin = (user) => {
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

  // TODO COLORS
  const handleSetColors = (colors) => {
    dispatch({
      type: types.SET_COLORS,
      payload: { colors },
    });
  };
  const handleCreateColor = (color) => {
    dispatch({
      type: types.CREATE_COLOR,
      payload: { color },
    });
  };
  const handleUpdateColor = (color) => {
    dispatch({
      type: types.UPDATE_COLOR,
      payload: { color },
    });
  };
  const handleDeleteColor = (id) => {
    dispatch({
      type: types.DELETE_COLOR,
      payload: { id },
    });
  };

  // TODO MODELS
  const handleSetModels = (models) => {
    dispatch({
      type: types.SET_MODELS,
      payload: { models },
    });
  };
  const handleCreateModel = (model) => {
    dispatch({
      type: types.CREATE_MODEL,
      payload: { model },
    });
  };
  const handleUpdateModel = (model) => {
    dispatch({
      type: types.UPDATE_MODEL,
      payload: { model },
    });
  };
  const handleDeleteModel = (id) => {
    dispatch({
      type: types.DELETE_MODEL,
      payload: { id },
    });
  };

  // TODO SIZES
  const handleSetSizes = (sizes) => {
    dispatch({
      type: types.SET_SIZES,
      payload: { sizes },
    });
  };
  const handleCreateSize = (size) => {
    dispatch({
      type: types.CREATE_SIZE,
      payload: { size },
    });
  };
  const handleUpdateSize = (size) => {
    dispatch({
      type: types.UPDATE_SIZE,
      payload: { size },
    });
  };
  const handleDeleteSize = (id) => {
    dispatch({
      type: types.DELETE_SIZE,
      payload: { id },
    });
  };

  // TODO PRODUCTS
  const handleSetProducts = (products) => {
    dispatch({
      type: types.SET_PRODUCTS,
      payload: { products },
    });
  };
  const handleCreateProduct = (product) => {
    dispatch({
      type: types.CREATE_PRODUCT,
      payload: { product },
    });
  };
  const handleUpdateProduct = (product) => {
    dispatch({
      type: types.UPDATE_PRODUCT,
      payload: { product },
    });
  };
  const handleDeleteProduct = (id) => {
    dispatch({
      type: types.DELETE_PRODUCT,
      payload: { id },
    });
  };

  // TODO USERS
  const handleSetUsers = (users) => {
    dispatch({
      type: types.SET_USERS,
      payload: { users },
    });
  };
  const handleCreateUser = (user) => {
    dispatch({
      type: types.CREATE_USER,
      payload: { user },
    });
  };
  const handleUpdateUser = (user) => {
    dispatch({
      type: types.UPDATE_USER,
      payload: { user },
    });
  };
  const handleDeleteUser = (id) => {
    dispatch({
      type: types.DELETE_USER,
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

        handleSetColors,
        handleCreateColor,
        handleUpdateColor,
        handleDeleteColor,

        handleSetModels,
        handleCreateModel,
        handleUpdateModel,
        handleDeleteModel,

        handleSetSizes,
        handleCreateSize,
        handleUpdateSize,
        handleDeleteSize,

        handleSetProducts,
        handleCreateProduct,
        handleUpdateProduct,
        handleDeleteProduct,

        handleSetUsers,
        handleCreateUser,
        handleUpdateUser,
        handleDeleteUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
