import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_RECIPE } from "../actions/types";
import { createRecipeFail, createRecipeSuccess } from "../actions/post";
import { ADD_RECIPE_PATH } from "../api";
import Axios from "axios";

const { post } = Axios;

export function* createRecipeHandler(action) {
  try {
    yield call(post, ADD_RECIPE_PATH, JSON.stringify(action.payload));
    yield put(createRecipeSuccess());
  } catch (error) {
    yield put(createRecipeFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(CREATE_RECIPE, createRecipeHandler);
}
