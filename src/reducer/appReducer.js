import { getUserLocalStorage } from "../helpers/authLocalStorage";
import { types } from "../types/types";

export const initialState = {
  auth: {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    token: "",
    type: "",
  },
  registers: [],
  products: [],
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
    // TODO LOGIN
    case types.LOGIN_USER:
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload.user,
        },
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        auth: initialState.auth,
      };

    // TODO ROLES
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

    // TODO BRANDS
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

    // TODO COLORS
    case types.SET_COLORS:
      return {
        ...state,
        colors: action.payload.colors,
      };
    case types.CREATE_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.payload.color],
      };
    case types.UPDATE_COLOR:
      return {
        ...state,
        colors: state.colors.map((color) => {
          if (color._id === action.payload.color._id) {
            return action.payload.color;
          } else {
            return color;
          }
        }),
      };
    case types.DELETE_COLOR:
      return {
        ...state,
        colors: state.colors.filter((color) => color._id !== action.payload.id),
      };

    // TODO COLORS
    case types.SET_MODELS:
      return {
        ...state,
        models: action.payload.models,
      };
    case types.CREATE_MODEL:
      return {
        ...state,
        models: [...state.models, action.payload.model],
      };
    case types.UPDATE_MODEL:
      return {
        ...state,
        models: state.models.map((model) => {
          if (model._id === action.payload.model._id) {
            return action.payload.model;
          } else {
            return model;
          }
        }),
      };
    case types.DELETE_MODEL:
      return {
        ...state,
        models: state.models.filter((model) => model._id !== action.payload.id),
      };

    // TODO SIZES
    case types.SET_SIZES:
      return {
        ...state,
        sizes: action.payload.sizes,
      };
    case types.CREATE_SIZE:
      return {
        ...state,
        sizes: [...state.sizes, action.payload.size],
      };
    case types.UPDATE_SIZE:
      return {
        ...state,
        sizes: state.sizes.map((size) => {
          if (size._id === action.payload.size._id) {
            return action.payload.size;
          } else {
            return size;
          }
        }),
      };
    case types.DELETE_SIZE:
      return {
        ...state,
        sizes: state.sizes.filter((size) => size._id !== action.payload.id),
      };

    // TODO PRODUCTS
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case types.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case types.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload.product._id) {
            return action.payload.product;
          } else {
            return product;
          }
        }),
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload.id
        ),
      };

    // TODO USERS
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case types.CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case types.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            return action.payload.user;
          } else {
            return user;
          }
        }),
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload.id),
      };

    default:
      return state;
  }
};
