import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import { withRouter } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import JoinModal from "../modals/JoinModal";
import ActionButton from "../ActionButton";
import Avatar from "../common/Avatar";
import Brand from "./Brand";

const Nav = ({ history }) => {
  const {
    push,
    location: { pathname }
  } = history;

  history.listen((location, action) => {});

  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    if (1 === 1) {
      // user not logged in
      setShowModal(true);
      console.log("OK");
    } else if (pathname === "/new") alert("OK");
    // will create a post request ?
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
      <Brand />
      <Searchbar />
      {pathname !== "/new" && (
        <ActionButton isLoggedIn={false} onClick={onClick} />
      )}
      {/* {<Avatar name="Tarık Köprülü" />} */}
      <JoinModal onClose={() => setShowModal(false)} showModal={showModal} />
    </Navbar>
  );
};

export default withRouter(Nav);
