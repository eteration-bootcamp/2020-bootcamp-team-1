import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import NotFoundSvg from "../../components/svgs/NotFoundSvg";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  return (
    <Container className="layout lower text-center">
      <Container className="d-flex justify-content-center">
        <NotFoundSvg />
      </Container>
      <h2 className="my-5">The page you looking for is not here :(</h2>
      <Button size="lg">Go back to home</Button>
    </Container>
  );
};

export default NotFound;
