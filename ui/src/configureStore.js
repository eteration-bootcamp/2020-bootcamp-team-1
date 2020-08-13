import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  authReducer,
  detailsReducer,
  homeReducer,
  postReducer,
  profileReducer
} from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware(rootSaga);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  combineReducers({
    authReducer,
    detailsReducer,
    homeReducer,
    postReducer,
    profileReducer
  }),
  enhancer
);

sagaMiddleware.run(rootSaga);

export default store;
