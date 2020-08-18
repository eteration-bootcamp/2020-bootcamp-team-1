import { put, call } from "redux-saga/effects";
import axios from "axios";

import {
  searchRecipes,
  searchRecipesSuccess,
  searchRecipesFail,
  getAllRecipesSuccess,
  getAllRecipesFail
} from "../../actions/home";
import { getAllRecipesHandler, searchRecipesHandler } from "../homeSaga";
import { GET_RECIPES_PATH, SEARCH_RECIPES_PATH } from "../../api";

const { get } = axios;

const getAllMockData = {
  recipeList: [
    {
      id: 1,
      title: "Perfection Chicken Salad",
      description: "Best chicken salad you'd ever have!",
      prepTime: "15 Minutes",
      serving: "1 Servings",
      chefTips: "Do it!",
      image: "img",
      userDto: null,
      ingredientsDto: null,
      directionsDto: null
    },
    {
      id: 2,
      title: "Perfection Chicken Salad",
      description: "Best chicken salad you'd ever have!",
      prepTime: "15 Minutes",
      serving: "1 Servings",
      chefTips: "Do it!",
      image: "img",
      userDto: null,
      ingredientsDto: null,
      directionsDto: null
    }
  ]
};

describe("Get recipes saga", () => {
  it("Triggers successful action with recipes", () => {
    const generator = getAllRecipesHandler();
    const response = { data: { ...getAllMockData } };

    expect(generator.next().value).toEqual(call(get, GET_RECIPES_PATH));

    expect(generator.next(response).value).toEqual(
      put(getAllRecipesSuccess({ recipes: getAllMockData.recipeList }))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("Triggers fail action on catch", () => {
    const generator = getAllRecipesHandler();
    const response = {};

    expect(generator.next().value).toEqual(call(get, GET_RECIPES_PATH));

    expect(generator.next(response).value).toEqual(
      put(
        getAllRecipesFail({
          error: TypeError("Cannot read property 'recipeList' of undefined")
        })
      )
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

describe("Search saga", () => {
  it("Successfully triggers successful action", () => {
    const searchTerm = "Chicken";
    const generator = searchRecipesHandler(
      searchRecipes({ filter: searchTerm })
    );

    const response = { data: { ...getAllMockData } };

    expect(generator.next().value).toEqual(
      call(get, `${SEARCH_RECIPES_PATH}/${searchTerm}`)
    );

    expect(generator.next(response).value).toEqual(
      put(searchRecipesSuccess({ results: getAllMockData.recipeList }))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("Successfully triggers fail on catch", () => {
    const searchTerm = "Chicken";
    const generator = searchRecipesHandler(
      searchRecipes({ filter: searchTerm })
    );
    const response = {};

    expect(generator.next().value).toEqual(
      call(get, `${SEARCH_RECIPES_PATH}/${searchTerm}`)
    );

    expect(generator.next(response).value).toEqual(
      put(
        searchRecipesFail({
          error: TypeError("Cannot read property 'recipeList' of undefined")
        })
      )
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
