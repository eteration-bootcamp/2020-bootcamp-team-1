import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./JoinModal.module.css";

const JoinModal = () => {
  // FOR MODALS
  const [showModal, setShowModal] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const switchState = () => setIsLogin(!isLogin);

  const text = isLogin ? "Log in" : "Sign up";
  const oppositeText = isLogin ? "Sign up" : "Log in";

  return (
    <Modal
      className={styles.Modal + " p-0 text-center"}
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header className="border-bottom-0" closeButton />
      <h2 className="mb-4">{text}</h2>
      <Modal.Body className="mx-5">
        {!isLogin && <Form.Control className="mb-3" placeholder="Username" />}
        <Form.Control className="mb-3" placeholder="E-Mail" />
        <Form.Control className="mb-4" placeholder="Password" />
        <Button className="mb-4" block>
          {text}
        </Button>
        <div className="divider" />
        <Button onClick={switchState} className="my-4" block>
          {`${oppositeText} with E-Mail`}
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default JoinModal;
