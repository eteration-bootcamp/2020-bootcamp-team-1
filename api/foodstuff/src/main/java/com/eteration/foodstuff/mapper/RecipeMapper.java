package com.eteration.foodstuff.mapper;

import com.eteration.foodstuff.dto.RecipeDto;
import com.eteration.foodstuff.model.Recipe;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RecipeMapper {
    @Named("toRecipe")
    Recipe toRecipe(RecipeDto recipeDto);

    @Named("toRecipeDto")
    RecipeDto toRecipeDto(Recipe recipe);

    @IterableMapping(qualifiedByName = "toRecipe")
    List<Recipe> toRecipeList(List<RecipeDto> recipeDtos);

    @IterableMapping(qualifiedByName = "toRecipeDto")
    List<RecipeDto> toRecipeDtoList(List<Recipe> recipes);
}
