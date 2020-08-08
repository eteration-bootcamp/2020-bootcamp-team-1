import React from "react";
import styles from "./DetailsPage.module.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ServingSvg from "../../components/svgs/ServingSvg";
import TimerSvg from "../../components/svgs/TimerSvg";

const DetailsPage = () => {
  const tempLink =
    "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg";

  return (
    <Container className="p-0 narrow-layout layout justify-content-center">
      {/* IMAGE */}
      <Container className="justify-content-center">
        <img className={styles.GrandImage} src={tempLink} />
      </Container>
      {/* TITLE DESC AND TIME */}
      <Container>
        <h2 className="mt-2">Title</h2>
        <p style={{ fontSize: "1.1rem", color: "#888" }}>Description</p>
        <div className="divider" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-3 text-muted d-inline-block">
            <TimerSvg /> 15 Minutes
          </p>
          <p className="m-3 text-muted d-inline-block">
            <ServingSvg /> 2 Servings
          </p>
        </div>
        <div className="divider" />
        {/* INGREDIENTS */}
        <div className="mt-3">
          <h4 className="mb-3">Ingredients</h4>
          <div className="ml-2">
            <Form.Check className="d-inline-block" />
            <p className="ml-3 d-inline-block">Two tbsp sugar</p>
          </div>
          <div className="ml-2">
            <Form.Check className="d-inline-block" />
            <p className="ml-3 d-inline-block">Two tbsp sugar</p>
          </div>
          <div className="ml-2">
            <Form.Check className="d-inline-block" />
            <p className="ml-3 d-inline-block">Two tbsp sugar</p>
          </div>
          <div className="ml-2">
            <Form.Check className="d-inline-block" />
            <p className="ml-3 d-inline-block">Two tbsp sugar</p>
          </div>
        </div>
        <div className="divider" />
        {/* DIRECTIONS */}
        <div className="mt-3">
          <h4>Directions</h4>
          <div className="ml-2 mt-4">
            <Form.Check className="d-inline-block" />
            <span>
              <h6 className="ml-3 d-inline-block">Step 1</h6>
              <p className="mt-2">Hello World</p>
            </span>
          </div>
          <div className="ml-2 mt-4">
            <Form.Check className="d-inline-block" />
            <span>
              <h6 className="ml-3 d-inline-block">Step 2</h6>
              <p className="mt-2">Hello World</p>
            </span>
          </div>
          <div className="ml-2 mt-4">
            <Form.Check className="d-inline-block" />
            <span>
              <h6 className="ml-3 d-inline-block">Step 3</h6>
              <p className="mt-2">Hello World</p>
            </span>
          </div>
        </div>
        <div className="divider" />
        {/* CHEF TIPS */}
        <div className="mt-3 mb-5">
          <h4>Chef's Tips</h4>
          <p className="ml-2 mt-3">Tips of the chef</p>
        </div>
      </Container>
    </Container>
  );
};

export default DetailsPage;
