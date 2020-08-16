import {
  GET_PERSON_RECIPES,
  GET_PERSON_RECIPES_FAIL,
  GET_PERSON_RECIPES_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from "./types";

export const getProfile = ({ profileID }) => {
  return {
    type: GET_PROFILE,
    payload: profileID,
  };
};

export const getProfileSuccess = ({ userDto }) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: userDto,
  };
};

export const getProfileFail = ({ error }) => {
  return {
    type: GET_PROFILE_FAIL,
    payload: error,
  };
};

export const getPersonRecipes = ({ profileID }) => {
  return {
    type: GET_PERSON_RECIPES,
    payload: profileID,
  };
};

export const getPersonRecipesSuccess = ({ recipeList }) => {
  return {
    type: GET_PERSON_RECIPES_SUCCESS,
    payload: recipeList,
  };
};

export const getPersonRecipesFail = ({ error }) => {
    return {
        type: GET_PERSON_RECIPES_FAIL,
        payload: error,
    }
}
