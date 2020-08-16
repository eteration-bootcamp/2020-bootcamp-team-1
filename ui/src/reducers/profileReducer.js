import {
  GET_PERSON_RECIPES,
  GET_PERSON_RECIPES_FAIL,
  GET_PERSON_RECIPES_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  displayingProfile: {},
  displayingRecipes: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return { ...state, loading: true };
    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, displayingProfile: payload };
    case GET_PROFILE_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_PERSON_RECIPES:
      return { ...state, loading: true };
    case GET_PERSON_RECIPES_SUCCESS:
      return { ...state, loading: false, displayingRecipes: payload };
    case GET_PERSON_RECIPES_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
