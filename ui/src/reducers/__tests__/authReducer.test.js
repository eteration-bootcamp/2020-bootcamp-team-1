import { LOGIN_SUCCESS } from "../../actions/types";
import authReducer from "../authReducer";

const defaultState = {
  currentUser: {},
  loading: false,
  error: false,
  signupSuccess: false,
  isLogin: false,
  isModalVisible: false
};

describe("Auth Reducer", () => {
  it("Should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it("Should return new state if receiving type", () => {
    const user = { id: 1 };
    const newState = authReducer(undefined, {
      type: LOGIN_SUCCESS,
      payload: user
    });
    expect(newState).toEqual({ ...defaultState, currentUser: user });
  });
});
