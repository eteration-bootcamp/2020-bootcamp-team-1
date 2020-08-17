import { setHeaderToken, removeHeaderToken } from "../api";

export const setUser = ({ token, user }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("currentUser", JSON.stringify(user));
  setHeaderToken(token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const removeUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  removeHeaderToken();
};
