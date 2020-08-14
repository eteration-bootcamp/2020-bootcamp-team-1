import React from "react";

import Ingredients from "./Ingredients";
import Directions from "./Directions";
import ChefTips from "./ChefTips";
import TimeAndServe from "./TimeAndServe";
import Container from "react-bootstrap/Container";

const DetailsBody = ({
  title,
  description,
  prepTime,
  serving,
  ingredients,
  directions,
  chefTips
}) => {
  return (
    <Container>
      <h2 className="mt-2">{title}</h2>
      <p style={{ fontSize: "1.1rem", color: "#888" }}>{description}</p>
      <div className="divider" />
      <TimeAndServe time={prepTime} servings={serving} />
      <div className="divider" />
      <Ingredients ingredients={ingredients} />
      <div className="divider" />
      <Directions directions={directions} />
      <div className="divider" />
      <ChefTips tips={chefTips} />
    </Container>
  );
};

export default DetailsBody;
