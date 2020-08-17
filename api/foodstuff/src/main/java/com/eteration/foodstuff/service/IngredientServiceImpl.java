package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.IngredientDto;
import com.eteration.foodstuff.mapper.IngredientMapper;
import com.eteration.foodstuff.model.Ingredient;
import com.eteration.foodstuff.model.Recipe;
import com.eteration.foodstuff.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IngredientServiceImpl implements IngredientService {

    private final IngredientRepository ingredientRepository;
    private final IngredientMapper ingredientMapper;

    @Override
    public List<IngredientDto> getListByRecipeId(long recipeId) {
        return ingredientMapper.toIngredientDtoList(ingredientRepository.findAllByRecipeId(recipeId));
    }

    @Override
    public List<IngredientDto> addIngredients(List<IngredientDto> ingredientDtoList, Recipe recipe) {
        List<IngredientDto> result = new ArrayList<>();

        for (Ingredient ingredient : ingredientMapper.toIngredientList(ingredientDtoList)) {
            System.out.println(recipe.toString());
            ingredient.setRecipe(recipe);
            result.add(ingredientMapper.toIngredientDto(ingredientRepository.save(ingredient)));
        }
        return result;
    }
}
