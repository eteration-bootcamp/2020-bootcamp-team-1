package com.eteration.foodstuff.repository;

import com.eteration.foodstuff.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientRepository extends JpaRepository<Ingredient,Long> {
            List<Ingredient> findAllByRecipeId(long recipeId);
}
