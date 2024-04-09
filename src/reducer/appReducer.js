import { getUserLocalStorage } from "../helpers/authLocalStorage";
import { types } from "../types/types";

export const initialState = {
  auth: {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    token: "",
  },
  registers: [],
  roles: [],
  brands: [],
  colors: [],
  models: [],
  sizes: [],
  users: [],
};

// TODO
export const initFunc = () => {
  const user = getUserLocalStorage();

  if (user) {
    return {
      ...initialState,
      auth: {
        ...initialState.auth,
        ...user,
      },
    };
  }

  return initialState;
};

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload.user,
          logged: true,
        },
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        auth: initialState.auth,
      };
    case types.SET_ROLES:
      return {
        ...state,
        roles: action.payload.roles,
      };
    case types.CREATE_ROLE:
      return {
        ...state,
        roles: [...state.roles, action.payload.role],
      };
    case types.UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map((role) => {
          if (role._id === action.payload.role._id) {
            return action.payload.role;
          } else {
            return role;
          }
        }),
      };
    case types.DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((role) => role._id !== action.payload.id),
      };
    case types.SET_BRANDS:
      return {
        ...state,
        brands: action.payload.brands,
      };
    case types.CREATE_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload.brand],
      };
    case types.UPDATE_BRAND:
      return {
        ...state,
        brands: state.brands.map((brand) => {
          if (brand._id === action.payload.brand._id) {
            return action.payload.brand;
          } else {
            return brand;
          }
        }),
      };
    case types.DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((brand) => brand._id !== action.payload.id),
      };
    default:
      return state;
  }
};
