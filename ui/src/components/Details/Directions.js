import React from "react";
import DirectionItem from "./DirectionItem";

const Directions = ({ directions }) => {
  return (
    <div className="mt-3">
      <h4>Directions</h4>
      <DirectionItem />
      <DirectionItem />
      <DirectionItem />
      <DirectionItem />
    </div>
  );
};

export default Directions;
