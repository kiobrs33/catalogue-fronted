export const setUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return null;
  }
  return user;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem("user");
};
