import axios from "axios";

export const clientApi = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});
