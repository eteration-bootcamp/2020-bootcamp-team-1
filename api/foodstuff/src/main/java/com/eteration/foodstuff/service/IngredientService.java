package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.IngredientDto;
import com.eteration.foodstuff.model.Ingredient;

import java.util.List;

public interface IngredientService {
    List<IngredientDto> getListByRecipeId(long recipeId);
}
