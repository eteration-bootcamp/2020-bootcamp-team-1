package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.RecipeDto;
import com.eteration.foodstuff.mapper.DirectionMapper;
import com.eteration.foodstuff.mapper.IngredientMapper;
import com.eteration.foodstuff.mapper.RecipeMapper;
import com.eteration.foodstuff.model.Ingredient;
import com.eteration.foodstuff.model.Recipe;
import com.eteration.foodstuff.repository.DirectionRepository;
import com.eteration.foodstuff.repository.IngredientRepository;
import com.eteration.foodstuff.repository.RecipeRepository;
import com.eteration.foodstuff.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private final DirectionService directionService;
    private final IngredientService ingredientService;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final RecipeMapper recipeMapper;
    private final IngredientMapper ingredientMapper;
    private final DirectionMapper directionMapper;

    @Override
    public RecipeDto addRecipe(RecipeDto recipeDto) {
        Recipe recipe = recipeMapper.toRecipe(recipeDto);
        recipe.setIngredients(ingredientMapper.toIngredientList(recipeDto.getIngredientsDto()));
        recipe.setDirections(directionMapper.toDirectionList(recipeDto.getDirectionsDto()));
        recipe.setUser(userRepository.getOne(recipeDto.getUserDto().getId()));

        return recipeMapper.toRecipeDto(recipeRepository.save(recipe));
    }
    @Override
    public List<RecipeDto> getList() {
        return recipeMapper.toRecipeDtoList(recipeRepository.findAll());
    }
    @Override
    public List<RecipeDto> getListByUserId(long userId) {
        return recipeMapper.toRecipeDtoList(recipeRepository.findAllByUserId(userId));
    }

    @Override
    public RecipeDto getRecipe(long id) {
        RecipeDto recipeDto = recipeMapper.toRecipeDto(recipeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Recipe : " + id + "does not exist !")));
        recipeDto.setDirectionsDto(directionService.getListByRecipeId(recipeDto.getId()));
        recipeDto.setIngredientsDto(ingredientService.getListByRecipeId(recipeDto.getId()));
        return recipeDto;
    }

    @Override
    public void removeRecipe(long id) {
        recipeRepository
                .delete(recipeRepository
                        .findById(id)
                        .orElseThrow(() -> new IllegalArgumentException("Recipe : " + id + "does not exist !")));
    }

    @Override
    public List<RecipeDto> getListByContainingTitle(String title) {
        return recipeMapper.toRecipeDtoList(recipeRepository.findByTitleContaining(title));
    }
}