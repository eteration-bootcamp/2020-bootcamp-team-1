import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import styles from "./JoinModal.module.css";
import PasswordHiddenSvg from "../../svgs/PasswordHiddenSvg";
import PasswordVisibleSvg from "../../svgs/PasswordVisibleSvg";

const JoinModal = ({ showModal, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const formSchema = yup.object().shape({
    name: !isLogin
      ? yup
          .string()
          .required("Name required.")
          .max(20, "Max 20 characters allowed.")
          .min(2, "Min 2 characters.")
      : undefined,
    surname: !isLogin
      ? yup
          .string()
          .required("Surname required")
          .max(20, "Max 20 characters allowed")
          .min(2, "Min 2 characters")
      : undefined,
    email: yup
      .string()
      .required("Email required")
      .email("Invalid email"),
    password: yup
      .string()
      .max(20, "Max 20 characters allowed")
      .min(6, "Min 6 characters")
      .required("Password required")
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema)
  });

  const switchState = () => setIsLogin(!isLogin);

  const switchVisibility = () => setVisibility(!visibility);

  const text = isLogin ? "Log in" : "Sign up";
  const oppositeText = isLogin ? "Sign up" : "Log in";

  const onSubmit = values => {
    const newValues = {
      ...(!isLogin && { username: values.name + " " + values.surname }),
      email: values.email,
      password: values.password
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
            <Form.Group className="mb-3  text-left">
              <Form.Control
                name="name"
                ref={register}
                placeholder="Name"
                isInvalid={errors.name}
              />
              <ErrorMessage errors={errors} name="name"></ErrorMessage>
            </Form.Group>
          )}
          {!isLogin && (
            <Form.Group className="mb-3  text-left">
              <Form.Control
                name="surname"
                ref={register}
                placeholder="Surname"
                isInvalid={errors.surname}
              />
              <ErrorMessage errors={errors} name="surname"></ErrorMessage>
            </Form.Group>
          )}
          <Form.Group className="mb-3  text-left">
            <Form.Control
              name="email"
              ref={register}
              placeholder="E-Mail"
              isInvalid={errors.email}
            />
            <ErrorMessage errors={errors} name="email"></ErrorMessage>
          </Form.Group>
          <Form.Group className="mb-4 text-left position-relative">
            <Form.Control
              name="password"
              type={visibility ? "text" : "password"}
              ref={register}
              placeholder="Password"
              isInvalid={errors.password}
            />
            <span
              className="position-absolute px-2 py-1 cursor-hover"
              style={{ top: "2px", right: 0 }}
              onClick={switchVisibility}
            >
              {visibility ? <PasswordHiddenSvg /> : <PasswordVisibleSvg />}
            </span>
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
