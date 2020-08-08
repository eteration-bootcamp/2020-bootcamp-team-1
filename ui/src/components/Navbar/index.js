import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import Searchbar from "../common/Searchbar";

const index = ({ actions: Components }) => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      className={styles.Navbar}
      variant="dark"
    >
      <Link to="/" className="d-flex align-items-center text-decoration-none">
        <img
          alt=""
          className={styles.BrandLogo}
          src={require("../../assets/images/cook-icon.jpg")}
        />
        <h3 className={styles.BrandName}>Foodstuff</h3>
      </Link>
      <Searchbar />
      {Components && <Components />}
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.Ungrow}>
        <Nav className="mr-auto">{Components && <Components />}</Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default index;
