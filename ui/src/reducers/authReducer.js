import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  AUTO_LOGIN_SUCCESS
} from "../actions/types";

const initialState = {
  currentUser: {},
  loading: false,
  error: false,
  signupSuccess: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, currentUser: payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    case AUTO_LOGIN_SUCCESS:
      return { ...state, currentUser: payload };
    case LOGOUT:
      return { ...state, currentUser: {} };
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, signupSuccess: true, loading: false };
    case SIGNUP_FAIL:
      return { ...state, signupSuccess: false, loading: false, error: payload };
    default:
      return state;
  }
}
