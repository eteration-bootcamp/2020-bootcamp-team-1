import React from "react";
import Container from "react-bootstrap/Container";
import ErrorSvg from "../../components/svgs/ErrorSvg";
import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <Container className="layout lower text-center">
      <Container className="d-flex justify-content-center">
        <ErrorSvg />
      </Container>
      <h2 className="my-5">There was an error :(</h2>
      <Button className="mb-5" size="lg">
        Go back to home
      </Button>
    </Container>
  );
};

export default ErrorPage;
