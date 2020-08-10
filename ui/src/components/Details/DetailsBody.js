import React from "react";

import Ingredients from "./Ingredients";
import Directions from "./Directions";
import ChefTips from "./ChefTips";
import TimeAndServe from "./TimeAndServe";
import Container from "react-bootstrap/Container";

const DetailsBody = () => {
  return (
    <Container>
      <h2 className="mt-2">Title</h2>
      <p style={{ fontSize: "1.1rem", color: "#888" }}>Description</p>
      <div className="divider" />
      <TimeAndServe />
      <div className="divider" />
      <Ingredients />
      <div className="divider" />
      <Directions />
      <div className="divider" />
      <ChefTips />
    </Container>
  );
};

export default DetailsBody;
