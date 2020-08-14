import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Feed } from "../../components/Home";

const HomePage = () => {
  return (
    <Container className="layout justify-content-center">
      <Feed recipes={[]} />
    </Container>
  );
};

export default HomePage;
