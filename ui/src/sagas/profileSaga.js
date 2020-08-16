import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PERSON_RECIPES, GET_PROFILE } from "../actions/types";
import {
  getProfileSuccess,
  getProfileFail,
  getPersonRecipesSuccess,
  getPersonRecipesFail,
} from "../actions/profile";
import { GET_PROFILE_PATH, GET_USER_RECIPES_PATH } from "../api";
import Axios from "axios";

const { get } = Axios;

export function* getProfileHandler(action) {
  try {
    const response = yield call(
      get,
      GET_PROFILE_PATH + action.payload
    );
    yield put(getProfileSuccess({ userDto: response.data.userDto }));
  } catch (error) {
    yield put(getProfileFail({ error }));
  }
}

export function* getPersonRecipesHandler(action) {
  try {
    const response = yield call(
      get,
      GET_USER_RECIPES_PATH,
      JSON.stringify(action.payload)
    );
    yield put(
      getPersonRecipesSuccess({ recipeList: response.data.recipeList })
    );
  } catch (error) {
    yield put(getPersonRecipesFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(GET_PROFILE, getProfileHandler);
  yield takeLatest(GET_PERSON_RECIPES, getPersonRecipesHandler);
}
