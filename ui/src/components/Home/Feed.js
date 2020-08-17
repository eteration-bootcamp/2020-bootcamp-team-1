import React from "react";
import RecipeCard from "../common/RecipeCard";
import styles from "./Home.module.css";

const Feed = ({ recipes }) => {
  const tempLink =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*";
  return (
    <div
      className={styles.Layout}
      style={{
        textAlign: "center"
      }}
    >
      {recipes && recipes.map(recipe => <RecipeCard item={recipe} />)}
    </div>
  );
};

export default Feed;
