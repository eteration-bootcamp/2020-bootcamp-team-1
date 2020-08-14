package com.eteration.FoodStuff.dto;

import lombok.*;

@EqualsAndHashCode(callSuper=false)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDto extends  BaseDto {
    private String name;
}