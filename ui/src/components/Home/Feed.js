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
      <RecipeCard
        item={{
          title: "Card title, very long title example with some bosch made",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title",
          description: "Lorem ipsumus",
          prepTime: "20 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very long e",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very le",
          description:
            "Lorem ipsum dolor sdasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very long title example with some bosch made",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very long title example with some bosch made",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very long title example with some bosch made",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very ",
          description: "Lorem ipsum dolor sit amet as",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very longmade",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />

      <RecipeCard
        item={{
          title: "Card title, very longmade",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
      <RecipeCard
        item={{
          title: "Card title, very longmade",
          description:
            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
          prepTime: "30 Minutes",
          image: tempLink
        }}
      />
    </div>
  );
};

export default Feed;
