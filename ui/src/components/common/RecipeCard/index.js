import React from "react";
import styles from "../Common.module.css";
import TimerSvg from "../../svgs/TimerSvg";
import Card from "react-bootstrap/Card";
import Ellipsis from "react-ellipsis-pjs";

const RecipeCard = ({ item: { title, prepTime, description, image } }) => {
  return (
    <Card className={styles.Card}>
      <Card.Img variant="top" src={image} className={styles.CardImage} />
      <Card.Body>
        <Ellipsis
          text={title}
          lines={2}
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginBottom: "0.75rem"
          }}
        />
        <p className="mb-2 text-muted card-subtitle">
          <TimerSvg />
          {prepTime}
        </p>
        <Ellipsis text={description} lines={3} style={{ marginBottom: 0 }} />
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
