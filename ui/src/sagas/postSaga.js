import { call, put, takeLatest, select } from "redux-saga/effects";
import { CREATE_RECIPE } from "../actions/types";
import { createRecipeFail, createRecipeSuccess } from "../actions/post";
import { ADD_RECIPE_PATH } from "../api";
import Axios from "axios";

const { post } = Axios;

export const getUserId = state => state.authReducer.currentUser.id;

export function* createRecipeHandler(action) {
  try {
    const userId = yield select(getUserId);
    const newRecipe = { ...action.payload.recipeDto };
    newRecipe.userDto = { id: userId };
    console.log(JSON.stringify({ recipeDto: newRecipe }));
    yield call(post, ADD_RECIPE_PATH, JSON.stringify({ recipeDto: newRecipe }));
    yield put(createRecipeSuccess());
  } catch (error) {
    yield put(createRecipeFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(CREATE_RECIPE, createRecipeHandler);
}
