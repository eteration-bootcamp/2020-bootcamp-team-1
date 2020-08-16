package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.IngredientDto;
import com.eteration.foodstuff.mapper.IngredientMapper;
import com.eteration.foodstuff.model.Ingredient;
import com.eteration.foodstuff.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
