import React from "react";
import Container from "react-bootstrap/Container";
import { DetailsImg, DetailsBody } from "../../components/Details";

const DetailsPage = () => {
  return (
    <Container className="p-0 narrow-layout layout justify-content-center">
      <DetailsImg />
      <DetailsBody />
    </Container>
  );
};

export default DetailsPage;
