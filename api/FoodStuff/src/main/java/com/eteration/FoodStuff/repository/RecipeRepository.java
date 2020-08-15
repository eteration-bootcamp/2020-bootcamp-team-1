package com.eteration.FoodStuff.repository;

import com.eteration.FoodStuff.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Long> {
    List<Recipe> findAllByUserId(long userId);
    List<Recipe> findByTitleContaining(String title);
}