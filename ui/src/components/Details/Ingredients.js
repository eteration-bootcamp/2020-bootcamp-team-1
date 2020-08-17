import React from "react";
import IngredientItem from "./IngredientItem";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="mt-3">
      <h4 className="mb-3">Ingredients</h4>
      {ingredients && ingredients.map((ingredient) => <IngredientItem key = { ingredient.id } name = { ingredient.name } />)}
    </div>
  );
};

export default Ingredients;
