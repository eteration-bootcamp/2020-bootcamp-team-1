import axios from 'axios';

axios.defaults.baseURL="http://localhost:8080/todo-api";
axios.defaults.timeout = 10000; // 10 seconds
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.put["Accept"] = "application/json";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.delete["Accept"] = "application/json";

export const ADD_TODO_PATH="/";
export const GET_TODO_LIST_PATH="/list";
export const REMOVE_TODO_PATH="/delete";
export const COMPLETE_TODO_PATH="/";