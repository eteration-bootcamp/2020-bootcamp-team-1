import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DETAILS } from "../actions/types";
import { getDetailsSuccess, getDetailsFail } from "../actions/details";
import { GET_RECIPE_PATH } from "../api";
import Axios from "axios";

const { get } = Axios;

export function* getDetailsHandler(action) {
  try {
    const response = yield call(
      get,
      GET_RECIPE_PATH + action.payload
    );
    yield put(getDetailsSuccess({ recipeDto: response.data.recipeDto }));
  } catch (error) {
    yield put(getDetailsFail({ error }));
  }
}

export default function* sagaHandler() {
  yield takeLatest(GET_DETAILS, getDetailsHandler);
}
