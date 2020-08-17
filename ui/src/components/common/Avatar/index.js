import React from "react";
import styles from "../Common.module.css";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Avatar = ({ name, onLogout }) => {
  const letters = name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .slice(0, 2);

  const popover = (
    <Popover id="profile-popover">
      <Popover.Content onClick={onLogout} className={styles.PopoverItem}>
        Log Out
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <button
        style={{ outline: "none" }}
        className={
          styles.Avatar +
          " d-flex justify-content-center align-items-center rounded-circle cursor-hover"
        }
      >
        {letters}
      </button>
    </OverlayTrigger>
  );
};

export default Avatar;
