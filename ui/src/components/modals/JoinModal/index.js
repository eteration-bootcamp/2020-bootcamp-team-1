import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./JoinModal.module.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const JoinModal = ({ showModal, onClose }) => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name required.")
      .max(20, "Max 20 characters allowed.")
      .min(2, "Min 2 characters allowed."),
    surname: yup
      .string()
      .required("Surname required")
      .max(20, "Max 20 characters allowed")
      .min(2, "Min 2 characters allowed"),
    email: yup.string().required("Email required").email("Invalid email"),
    password: yup
      .string()
      .max(20, "Max 20 characters allowed")
      .min(6, "Min 6 characters allowed")
      .required("Password required"),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  // FOR MODALS
  const [isLogin, setIsLogin] = useState(false);

  const switchState = () => setIsLogin(!isLogin);

  const text = isLogin ? "Log in" : "Sign up";
  const oppositeText = isLogin ? "Sign up" : "Log in";

  const onSubmit = (values) => {
    const newValues = {
      username: values.name + " " + values.surname,
      email: values.email,
      password: values.password,
    };
    console.log(newValues);
  };

  return (
    <Modal
      className={styles.Modal + " p-0 text-center"}
      show={showModal}
      onHide={onClose}
    >
      <Modal.Header className="border-bottom-0" closeButton />
      <h2 className="mb-4">{text}</h2>
      <Modal.Body className="mx-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <Form.Group>
              <Form.Control
                name="name"
                ref={register}
                className="mb-3"
                placeholder="Name"
              />
              <ErrorMessage errors={errors} name="name"></ErrorMessage>
            </Form.Group>
          )}
          {!isLogin && (
            <Form.Group>
              <Form.Control
                name="surname"
                ref={register}
                className="mb-3"
                placeholder="Surname"
              />
              <ErrorMessage errors={errors} name="surname"></ErrorMessage>
            </Form.Group>
          )}
          <Form.Group>
            <Form.Control
              name="email"
              ref={register}
              className="mb-3"
              placeholder="E-Mail"
            />
            <ErrorMessage errors={errors} name="email"></ErrorMessage>
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="password"
              type="password"
              ref={register}
              className="mb-4"
              placeholder="Password"
            />
            <ErrorMessage errors={errors} name="password"></ErrorMessage>
          </Form.Group>
          <Button type="submit" className="mb-4" block>
            {text}
          </Button>
          <div className="divider" />
          <Button onClick={switchState} className="my-4" block>
            {`${oppositeText} with E-Mail`}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default JoinModal;
