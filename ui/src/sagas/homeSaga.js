import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_RECIPES } from "../actions/types";
import { getAllRecipesFail, getAllRecipesSuccess } from "../actions/home";
import { GET_RECIPES_PATH } from "../api";
import Axios from "axios";

const { get } = Axios;

export function* getAllRecipesHandler() {
  try {
    const response = yield call(get, GET_RECIPES_PATH);
    yield put(getAllRecipesSuccess({ recipes: response.data.recipeList }));
  } catch (error) {
    yield put(getAllRecipesFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(GET_ALL_RECIPES, getAllRecipesHandler);
}
