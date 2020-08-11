package com.eteration.FoodStuff.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Lob;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DirectionDto extends  BaseDto {
    private byte stepNumber;
    @Lob
    private String description;
   //private RecipeDto recipe;
}
