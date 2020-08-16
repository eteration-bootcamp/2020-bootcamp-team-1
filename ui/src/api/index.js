import axios from "axios";

import { removeUser } from "../utils/tokenUtil";
import { logout } from "../actions/auth";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.timeout = 60000; // 60 seconds
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.put["Accept"] = "application/json";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.delete["Accept"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (401 === error.response.status) {
      removeHeaderToken();
      logout();
    } else {
      return Promise.reject(error);
    }
  }
);

export const LOGIN_PATH = "/account/login";
export const REGISTER_PATH = "/account/register";
export const GET_PROFILE_PATH = "/users/"; // userID
export const GET_RECIPES_PATH = "/recipes/";
export const GET_RECIPE_PATH = "/recipes/"; // recipeID
export const ADD_RECIPE_PATH = "/recipes/";
export const DELETE_RECIPE_PATH = "/recipes/"; // recipeID
export const GET_USER_RECIPES_PATH = "/recipes/user/"; // userID
export const SEARCH_RECIPES_PATH = "/recipes/search/"; // recipeTitle

export const setHeaderToken = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};
