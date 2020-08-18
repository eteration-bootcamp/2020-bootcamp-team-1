import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  SIGNUP,
  AUTO_LOGIN,
  SET_MODAL_STATE,
  SET_MODAL_VISIBILITY
} from "../actions/types";
import {
  loginSuccess,
  loginFail,
  signupSuccess,
  signupFail,
  autoLoginSuccess
} from "../actions/auth";
import { LOGIN_PATH, REGISTER_PATH } from "../api";
import Axios from "axios";
import { getCurrentUser, getToken } from "../utils/tokenUtil";

const { post } = Axios;

export function* loginHandler(action) {
  try {
    const response = yield call(
      post,
      LOGIN_PATH,
      JSON.stringify(action.payload)
    );
    yield put(loginSuccess({ tokenDto: response.data.tokenDto }));
  } catch (error) {
    yield put(loginFail({ error }));
  }
}

export function* signupHandler(action) {
  try {
    yield call(post, REGISTER_PATH, JSON.stringify(action.payload));
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail({ error }));
  }
}

export function* autoLoginHandler() {
  const user = yield call(getCurrentUser);
  const token = yield call(getToken);
  if (user && token) {
    yield put(autoLoginSuccess({ token, user }));
  }
}

export function* modalVisibilityHandler() {
  yield;
}

export function* modalStateHandler() {
  yield;
}

export default function* sagaHandler() {
  yield takeLatest(LOGIN, loginHandler);
  yield takeLatest(SIGNUP, signupHandler);
  yield takeLatest(AUTO_LOGIN, autoLoginHandler);
  yield takeLatest(SET_MODAL_STATE, modalStateHandler);
  yield takeLatest(SET_MODAL_VISIBILITY, modalVisibilityHandler);
}
