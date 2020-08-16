package com.eteration.foodstuff.mapper;

import com.eteration.foodstuff.dto.IngredientDto;
import com.eteration.foodstuff.model.Ingredient;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface IngredientMapper {
    @Named("toIngredient")
    Ingredient toIngredient(IngredientDto ingredientDto);

    @Named("toIngredientDto")
    IngredientDto toIngredientDto(Ingredient ingredient);

    @IterableMapping(qualifiedByName = "toIngredientList")
    List<Ingredient> toIngredientList(List<IngredientDto> ingredientDtoList);

    @IterableMapping(qualifiedByName = "toIngredientDtoList")
    List<IngredientDto> toIngredientDtoList(List<Ingredient> ingredients);
}
