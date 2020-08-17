package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.DirectionDto;
import com.eteration.foodstuff.dto.IngredientDto;
import com.eteration.foodstuff.mapper.DirectionMapper;
import com.eteration.foodstuff.model.Direction;
import com.eteration.foodstuff.model.Ingredient;
import com.eteration.foodstuff.model.Recipe;
import com.eteration.foodstuff.repository.DirectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DirectionServiceImpl implements DirectionService {

    private final DirectionRepository directionRepository;
    private final DirectionMapper directionMapper;

    @Override
    public List<DirectionDto> getListByRecipeId(long recipeId) {
        return directionMapper.toDirectionDtoList(directionRepository.findAllByRecipeId(recipeId));
    }

    @Override
    public List<DirectionDto> addDirection(List<DirectionDto> directionDtoList, Recipe recipe) {
        List<DirectionDto> result = new ArrayList<>();
        for (Direction direction : directionMapper.toDirectionList(directionDtoList)) {
            System.out.println(recipe.toString());
            direction.setRecipe(recipe);
            result.add(directionMapper.toDirectionDto(directionRepository.save(direction)));
        }
        return result;
    }
}
