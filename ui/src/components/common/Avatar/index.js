import React from "react";
import styles from "../Common.module.css";

const Avatar = ({ name }) => {
  const letters = name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .slice(0, 2);
  return (
    <span
      className={
        styles.Avatar +
        " d-flex justify-content-center align-items-center rounded-circle cursor-hover"
      }
    >
      {letters}
    </span>
  );
};

export default Avatar;
