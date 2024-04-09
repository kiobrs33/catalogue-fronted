import { types } from "../types/types";

export const initialState = {
  auth: {
    id: "",
    name: "",
    lastname: "",
    token: "",
    logged: false,
  },
  registers: [],
  roles: [],
  brands: [],
  colors: [],
  models: [],
  sizes: [],
  users: [],
};

export const initialStateFunc = () => {
  return {};
};

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createRole:
      return state;

    default:
      return state;
  }
};
