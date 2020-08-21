import { combineReducers, createStore, compose,applyMiddleware } from "redux";
import todoReducer from "./reducers/todo";
import createSagaMiddleware from 'redux-saga';
import sagaHandler from './sagas/';


const sagaMiddleware = createSagaMiddleware();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
      combineReducers({ todoReducer }), enhancer);
sagaMiddleware.run(sagaHandler);
export default store;
