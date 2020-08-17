import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  AUTO_LOGIN,
  AUTO_LOGIN_SUCCESS,
  SET_MODAL_STATE,
  SET_MODAL_VISIBILITY
} from "./types";

import { setUser, removeUser } from "../utils/tokenUtil";

export const login = ({ username, password }) => {
  return {
    type: LOGIN,
    payload: {
      loginDto: {
        username,
        password
      }
    }
  };
};

export const loginSuccess = ({ tokenDto }) => {
  setUser({ token: tokenDto.token, user: tokenDto });
  return {
    type: LOGIN_SUCCESS,
    payload: tokenDto
  };
};

export const loginFail = ({ error }) => {
  return {
    type: LOGIN_FAIL,
    payload: error
  };
};

export const logout = () => {
  removeUser();
  return {
    type: LOGOUT
  };
};

export const signup = ({ username, email, password }) => {
  return {
    type: SIGNUP,
    payload: {
      registrationDto: {
        username,
        email,
        password
      }
    }
  };
};

export const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS
  };
};

export const signupFail = ({ error }) => {
  return {
    type: SIGNUP_FAIL,
    payload: error
  };
};

export const autoLogin = () => {
  return { type: AUTO_LOGIN };
};

export const autoLoginSuccess = ({ token, user }) => {
  return { type: AUTO_LOGIN_SUCCESS, payload: { ...user, token } };
};

export const switchModalVisibility = () => {
  return { type: SET_MODAL_VISIBILITY };
};

export const switchModalState = () => {
  return { type: SET_MODAL_STATE };
};
