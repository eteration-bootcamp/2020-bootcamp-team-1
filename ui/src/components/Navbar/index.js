import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Searchbar from "../common/Searchbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Nav = ({ actions: Components }) => {
  // FOR MODALS
  const [showModal, setShowModal] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

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
      <Modal
        className={styles.Modal + " p-0 text-center"}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header className="border-bottom-0" closeButton />
        <h2 className="mb-4">Sign Up</h2>
        <Modal.Body className="mx-5">
          <Form.Control className="mb-3" placeholder="Username" />
          <Form.Control className="mb-3" placeholder="E-Mail" />
          <Form.Control className="mb-4" placeholder="Password" />
          <Button className="mb-4" block>
            Sign Up
          </Button>
          <div className="divider" />
          <Button className="my-4" block>
            Log in with E-Mail
          </Button>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Nav;
