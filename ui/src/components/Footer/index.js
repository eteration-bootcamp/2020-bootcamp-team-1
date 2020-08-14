import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div
      className={
        styles.Footer + " mt-5 d-flex justify-content-center align-items-center"
      }
      style={{ width: "100%", height: "120px", background: "#b45c15" }}
    >
      <h6 className={styles.CopyrightText}>
        © 2020 - Eteration Bootcamp Team 1
      </h6>
    </div>
  );
};

export default Footer;
