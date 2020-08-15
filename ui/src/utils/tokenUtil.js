import { setHeaderToken, removeHeaderToken } from '../api';

export const setToken = token => {
  localStorage.setItem("token", token);
  setHeaderToken(token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  removeHeaderToken();
};
