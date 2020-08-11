import React from "react";
import Container from "react-bootstrap/Container";
import ErrorSvg from "../../components/svgs/ErrorSvg";
import BackButton from "../../components/common/BackButton";

const ErrorPage = () => {
  return (
    <Container className="layout lower text-center">
      <Container className="d-flex justify-content-center">
        <ErrorSvg />
      </Container>
      <h2 className="my-5">There was an error :(</h2>
      <BackButton />
    </Container>
  );
};

export default ErrorPage;
