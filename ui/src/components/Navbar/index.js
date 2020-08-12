import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import { Link, withRouter } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import JoinModal from "../modals/JoinModal";
import ActionButton from "../ActionButton";
import Avatar from "../common/Avatar";

const Nav = ({ history }) => {
  const {
    push,
    location: { pathname }
  } = history;

  history.listen((location, action) => {});

  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    if (1 === 0) {
      // user not logged in
      setShowModal(true);
      console.log("OK");
    } else if (pathname === "/new") alert("OK");
    else push("/new");
  };

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
      {pathname !== "/new" && (
        <ActionButton isLoggedIn={true} onClick={onClick} />
      )}
      {<Avatar name="Tarık Köprülü" />}
      <JoinModal onClose={() => setShowModal(false)} showModal={showModal} />
    </Navbar>
  );
};

export default withRouter(Nav);
