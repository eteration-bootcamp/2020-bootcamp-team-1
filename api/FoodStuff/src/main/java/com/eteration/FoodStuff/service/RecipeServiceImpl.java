package com.eteration.FoodStuff.service;

import com.eteration.FoodStuff.dto.RecipeDto;
import com.eteration.FoodStuff.mapper.RecipeMapper;
import com.eteration.FoodStuff.model.Recipe;
import com.eteration.FoodStuff.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private final RecipeMapper recipeMapper;
    private final RecipeRepository recipeRepository;

    @Override
    public RecipeDto addRecipe(RecipeDto recipeDto) {
        return recipeMapper.toRecipeDto(recipeRepository.save(recipeMapper.toRecipe(recipeDto)));
    }

    @Override
    public List<RecipeDto> getList() {
        return recipeMapper.toRecipeDtoList(recipeRepository.findAll());
    }

    @Override
    public void removeRecipe(long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Recipe : " + id + "does not exist !"));
        recipeRepository.delete(recipe);
    }
}
