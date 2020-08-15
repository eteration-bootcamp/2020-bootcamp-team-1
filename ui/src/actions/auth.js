import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "./types";

import { setToken, removeToken } from "../utils/tokenUtil";

export const login = ({ username, password }) => {
  return {
    type: LOGIN,
    payload: {
      loginDto: {
        username,
        password,
      },
    },
  };
};

export const loginSuccess = ({ tokenDto }) => {
  setToken(tokenDto.token);
  return {
    type: LOGIN_SUCCESS,
    payload: tokenDto,
  };
};

export const loginFail = ({ error }) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const logout = () => {
  removeToken();
  return {
    type: LOGOUT,
  };
};

export const signup = ({ username, email, password }) => {
    return {
      type: SIGNUP,
      payload: {
        registrationDto: {
          username,
          email,
          password,
        },
      },
    };
  };
  
  export const signupSuccess = () => {
    return {
      type: SIGNUP_SUCCESS,
    };
  };
  
  export const signupFail = ({ error }) => {
    return {
      type: SIGNUP_FAIL,
      payload: error,
    };
  };
