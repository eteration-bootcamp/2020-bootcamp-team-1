import { spawn } from "redux-saga/effects";
import authSaga from "./authSaga";
import detailsSaga from "./detailsSaga";
import homeSaga from "./homeSaga";
import postSaga from "./postSaga";
import profileSaga from "./profileSaga";

export default function* rootSaga() {
    yield spawn(authSaga);
    yield spawn(detailsSaga);
    yield spawn(homeSaga);
    yield spawn(postSaga);
    yield spawn(profileSaga);
}
