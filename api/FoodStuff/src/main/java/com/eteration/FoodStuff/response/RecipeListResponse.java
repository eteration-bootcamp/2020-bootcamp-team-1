package com.eteration.FoodStuff.response;

import com.eteration.FoodStuff.dto.RecipeDto;
import lombok.Data;

import java.util.List;

@Data
public class RecipeListResponse {
    List<RecipeDto> recipeList;
}
