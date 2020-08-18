import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAIL,
  GET_ALL_RECIPES_SUCCESS,
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAIL
} from "./types";

export const getAllRecipes = () => {
  return { type: GET_ALL_RECIPES };
};

export const getAllRecipesSuccess = ({ recipes }) => {
  return { type: GET_ALL_RECIPES_SUCCESS, payload: recipes };
};

export const getAllRecipesFail = ({ error }) => {
  return { type: GET_ALL_RECIPES_FAIL, payload: error };
};

export const searchRecipes = ({ filter }) => {
  return { type: GET_SEARCH_RESULTS, payload: filter };
};

export const searchRecipesSuccess = ({ results }) => {
  return { type: GET_SEARCH_RESULTS_SUCCESS, payload: results };
};

export const searchRecipesFail = ({ error }) => {
  return { type: GET_SEARCH_RESULTS_FAIL };
};
