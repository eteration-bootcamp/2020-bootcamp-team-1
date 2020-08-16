package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.RecipeDto;

import java.util.List;

public interface RecipeService {
    RecipeDto addRecipe(RecipeDto recipeDto);
    RecipeDto getRecipe(long id);
    void removeRecipe(long id);
    List<RecipeDto> getList();
    List<RecipeDto> getListByUserId(long userId);
    List<RecipeDto> getListByContainingTitle(String title);
}