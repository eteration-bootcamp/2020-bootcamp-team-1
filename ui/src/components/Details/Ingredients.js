import React from "react";
import IngredientItem from "./IngredientItem";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="mt-3">
      <h4 className="mb-3">Ingredients</h4>
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
    </div>
  );
};

export default Ingredients;
