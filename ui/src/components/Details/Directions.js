import React from "react";
import DirectionItem from "./DirectionItem";

const Directions = ({ directions }) => {
  return (
    <div className="mt-3">
      <h4>Directions</h4>
      {directions && directions.map((direction) => <DirectionItem key = { direction.id } description = { direction.description } stepNumber = { direction.stepNumber } />)}
    </div>
  );
};

export default Directions;
