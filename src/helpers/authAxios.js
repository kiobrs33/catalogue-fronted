import { clientApi } from "../api/clientApi";

export const postLoginUser = async (user) => {
  try {
    const { data } = await clientApi.post("/auth/login", user);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
