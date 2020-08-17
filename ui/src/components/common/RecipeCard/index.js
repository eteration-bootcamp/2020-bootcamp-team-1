import React from "react";
import Card from "react-bootstrap/Card";
import Ellipsis from "react-ellipsis-pjs";
import { withRouter } from "react-router-dom";
import styles from "../Common.module.css";
import TimerSvg from "../../svgs/TimerSvg";
import defImage from "../../../assets/images/defimage.png";

const RecipeCard = ({
  item: { id, title, prepTime, description, image },
  history: { push }
}) => {
  console.log(title, prepTime, description, image);

  const onCardClick = () => push(`recipe/${id}`);

  return (
    <Card className={styles.Card + " cursor-hover"} onClick={onCardClick}>
      <Card.Img
        variant="top"
        src={image || defImage}
        className={styles.CardImage}
      />
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

export default withRouter(RecipeCard);
