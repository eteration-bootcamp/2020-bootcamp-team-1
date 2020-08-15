import { GET_DETAILS, GET_DETAILS_FAIL, GET_DETAILS_SUCCESS } from "./types";

export const getDetails = ({ recipeID }) => {
    return {
        type: GET_DETAILS,
        payload: recipeID,
    };
};

export const getDetailsSuccess = ({ recipeDto }) => {
    return {
        type: GET_DETAILS_SUCCESS,
        payload: recipeDto,
    };
};

export const getDetailsFail = ({ error }) => {
    return {
        type: GET_DETAILS_FAIL,
        payload: error,
    };
};