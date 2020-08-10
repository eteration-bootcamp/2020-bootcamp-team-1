import React from "react";
import styles from "./Details.module.css";
import Container from "react-bootstrap/Container";

const tempLink =
  "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg";

const DetailsImg = () => {
  return (
    <Container className="justify-content-center">
      <img alt="" className={styles.GrandImage} src={tempLink} />
    </Container>
  );
};

export default DetailsImg;
