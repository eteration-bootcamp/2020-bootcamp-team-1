package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.DirectionDto;
import com.eteration.foodstuff.model.Recipe;

import java.util.List;

public interface DirectionService {
    List<DirectionDto> getListByRecipeId(long recipeId);
    List<DirectionDto> addDirection(List<DirectionDto> directionDtoList, Recipe recipe);
}
