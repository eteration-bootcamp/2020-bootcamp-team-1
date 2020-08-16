import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAIL,
  GET_ALL_RECIPES_SUCCESS
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
