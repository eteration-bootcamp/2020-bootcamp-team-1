package com.eteration.foodstuff.dto;

import com.eteration.foodstuff.model.Ingredient;
import lombok.*;
import javax.persistence.Lob;
import java.util.ArrayList;
import java.util.List;


@EqualsAndHashCode(callSuper=false)
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
    @Lob
    private String image;
    private UserDto userDto;
    private List<IngredientDto> ingredientsDto;
    private List<DirectionDto> directionsDto;
}