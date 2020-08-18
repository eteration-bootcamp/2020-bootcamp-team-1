import React from "react";
import RecipeCard from "../common/RecipeCard";
import styles from "./Home.module.css";

const Feed = ({ recipes }) => {
  return (
    <div
      className={styles.Layout}
      style={{
        textAlign: "center"
      }}
    >
      {recipes &&
        recipes.map(recipe => <RecipeCard key={recipe.id} item={recipe} />)}
    </div>
  );
};

export default Feed;
