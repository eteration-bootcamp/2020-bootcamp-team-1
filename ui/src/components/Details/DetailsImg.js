import React from "react";
import styles from "./Details.module.css";
import Container from "react-bootstrap/Container";

const DetailsImg = ({ image }) => {
  return (
    <Container className="justify-content-center">
      <img alt="" className={styles.GrandImage} src={image} />
    </Container>
  );
};

export default DetailsImg;
