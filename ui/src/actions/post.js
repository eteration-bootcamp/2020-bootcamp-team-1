import {
  CREATE_RECIPE,
  CREATE_RECIPE_FAIL,
  CREATE_RECIPE_SUCCESS
} from "./types";

export const createRecipe = ({ recipeDto }) => {
  return { type: CREATE_RECIPE, payload: recipeDto };
};

export const createRecipeSuccess = () => {
  return { type: CREATE_RECIPE_SUCCESS };
};

export const createRecipeFail = ({ error }) => {
  return { type: CREATE_RECIPE_FAIL, payload: error };
};
