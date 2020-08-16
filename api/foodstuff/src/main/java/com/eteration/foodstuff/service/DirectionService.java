package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.DirectionDto;

import java.util.List;

public interface DirectionService {
    List<DirectionDto> getListByRecipeId(long recipeId);
}
