import React from "react";
import styles from "../Common.module.css";
import PlusSvg from "../../svgs/PlusSvg";
import ConfirmSvg from "../../svgs/ConfirmSvg";

// TYPES : plus or confirm
const Fab = ({ type = "plus" }) => {
  return (
    <div
      className={
        "cursor-hover position-fixed p-2 rounded-circle " +
        styles.Fab
      }
    >
      {type === "plus" ? <PlusSvg /> : <ConfirmSvg />}
    </div>
  );
};

export default Fab;
