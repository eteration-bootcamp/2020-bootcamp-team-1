package com.eteration.FoodStuff.service;

import com.eteration.FoodStuff.dto.RecipeDto;

import java.util.List;

public interface RecipeService {
    RecipeDto addRecipe(RecipeDto recipeDto);
    List<RecipeDto> getList();
    void removeRecipe(long id);
}
