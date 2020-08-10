import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Feed } from "../../components/Home";

const HomePage = () => {
  return (
    <Container className="layout justify-content-center">
      <Feed />
    </Container>
  );
};

export default HomePage;
