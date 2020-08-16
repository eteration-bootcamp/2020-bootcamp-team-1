package com.eteration.foodstuff.response;

import com.eteration.foodstuff.dto.RecipeDto;
import lombok.Data;

import java.util.List;

@Data
public class RecipeListResponse {
    List<RecipeDto> recipeList;
}
