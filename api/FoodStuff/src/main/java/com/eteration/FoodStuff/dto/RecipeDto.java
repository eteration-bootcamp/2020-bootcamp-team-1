package com.eteration.FoodStuff.dto;

import com.eteration.FoodStuff.model.Ingredient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Lob;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDto extends BaseDto {
    private String title;
    @Lob
    private String description;
    private String prepTime;
    private String serving;
    @Lob
    private String chefTips;
    private String image;
    private UserDto user;
    private List<Ingredient> ingredients;
    private List<DirectionDto> directions;
}
