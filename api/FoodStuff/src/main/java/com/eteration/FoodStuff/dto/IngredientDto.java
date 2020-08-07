package com.eteration.FoodStuff.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDto extends  BaseDto {
    private String name;
    private RecipeDto recipe;
}
