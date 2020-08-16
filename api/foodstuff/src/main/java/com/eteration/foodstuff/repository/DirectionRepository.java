package com.eteration.foodstuff.repository;

import com.eteration.foodstuff.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DirectionRepository extends JpaRepository<Direction,Long> {
    List<Direction> findAllByRecipeId(long recipeId);
}
