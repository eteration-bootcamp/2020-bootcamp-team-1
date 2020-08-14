import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Brand = () => {
  return (
    <Link to="/" className="d-flex align-items-center text-decoration-none">
      <img
        alt=""
        className={styles.BrandLogo}
        src={require("../../assets/images/cook-icon.jpg")}
      />
      <h3 className={styles.BrandName}>Foodstuff</h3>
    </Link>
  );
};

export default Brand;
