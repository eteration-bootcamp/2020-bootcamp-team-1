import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_RECIPES, GET_SEARCH_RESULTS } from "../actions/types";
import {
  getAllRecipesFail,
  getAllRecipesSuccess,
  searchRecipesFail,
  searchRecipesSuccess
} from "../actions/home";
import { GET_RECIPES_PATH, SEARCH_RECIPES_PATH } from "../api";
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

export function* searchRecipesHandler(action) {
  try {
    const response = yield call(
      get,
      `${SEARCH_RECIPES_PATH}/${action.payload}`
    );
    yield put(
      searchRecipesSuccess({ results: response.data.recipeList.slice(0, 3) })
    );
  } catch (error) {
    yield put(searchRecipesFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(GET_ALL_RECIPES, getAllRecipesHandler);
  yield takeLatest(GET_SEARCH_RESULTS, searchRecipesHandler);
}
