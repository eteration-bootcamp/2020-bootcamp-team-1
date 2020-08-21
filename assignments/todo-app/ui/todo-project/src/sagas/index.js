import { call, put, takeLatest } from 'redux-saga/effects';
import { addTodoSucces, addTodoFail, loadTodoSuccess, loadTodoFail, removeTodoSucces, removeTodoFail, completeTodoSuccess, completeTodoFail } from '.././/actions/todo';
import { ADD_TODO, LOAD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../actions/types';
import { ADD_TODO_PATH, GET_TODO_LIST_PATH, REMOVE_TODO_PATH, COMPLETE_TODO_PATH } from '../api';
import Axios from 'axios';


export function* addTodoHandler(action) {

  const todo = action.payload;
  try {
    const response = yield call(Axios.post, ADD_TODO_PATH, JSON.stringify(todo));
    yield put(addTodoSucces(response.data))
  } catch (error) {
    console.log(error);
    yield put(addTodoFail(error))
  }
}

export function* loadTodoHandler() {

  try {
    const response = yield call(Axios.get, GET_TODO_LIST_PATH);
    yield put(loadTodoSuccess(response.data))
  } catch (error) {
    console.log(error);
    yield put(loadTodoFail(error))
  }
}
export function* deleteTodoHandler(action) {
  const id = action.payload;
  try {

    yield call(Axios.delete, `${REMOVE_TODO_PATH}/${id}`);
    yield put(removeTodoSucces(id));
  } catch (error) {
    yield put(removeTodoFail(error));
  }
}

export function* completeTodoHandler(action) {
  const id = action.payload;
  try {
    yield call(Axios.put, COMPLETE_TODO_PATH, JSON.stringify({ id, checked: true }));
    yield put(completeTodoSuccess(id));
  } catch (error) {
    yield put(completeTodoFail(error));
  }
}

export default function* sagaHandler() {
  yield takeLatest(ADD_TODO, addTodoHandler)
  yield takeLatest(LOAD_TODO, loadTodoHandler)
  yield takeLatest(REMOVE_TODO, deleteTodoHandler)
  yield takeLatest(COMPLETE_TODO, completeTodoHandler)
}