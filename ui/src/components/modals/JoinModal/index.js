import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import {
  login,
  signup,
  switchModalState,
  switchModalVisibility
} from "../../../actions/auth";
import Alert from "react-bootstrap/Alert";

import styles from "./JoinModal.module.css";
import PasswordHiddenSvg from "../../svgs/PasswordHiddenSvg";
import PasswordVisibleSvg from "../../svgs/PasswordVisibleSvg";
import LoadingIndicator from "../../common/LoadingIndicator";

const JoinModal = ({
  login,
  signup,
  loading,
  currentUser,
  switchModalState,
  switchModalVisibility,
  isLogin,
  isModalVisible,
  error,
  signupSuccess
}) => {
  const [visibility, setVisibility] = useState(false);

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Name required.")
      .max(25, "Max 20 characters allowed.")
      .min(4, "Min 4 characters."),
    email: !isLogin
      ? yup
          .string()
          .required("Email required")
          .email("Invalid email")
      : undefined,
    password: yup
      .string()
      .max(20, "Max 20 characters allowed")
      .min(6, "Min 6 characters")
      .required("Password required")
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema)
  });

  const switchVisibility = () => setVisibility(!visibility);

  const text = isLogin ? "Log in" : "Sign up";
  const oppositeText = isLogin ? "Sign up" : "Log in";

  const onSubmit = values => {
    const newValues = {
      ...(!isLogin && { email: values.email }),
      username: values.username,
      password: values.password
    };
    isLogin
      ? login({ username: newValues.username, password: newValues.password })
      : signup({
          username: newValues.username,
          email: newValues.email,
          password: newValues.password
        });
  };

  if (currentUser.id) {
    return <div />;
  }

  return (
    <Modal
      className={styles.Modal + " p-0 text-center"}
      show={isModalVisible}
      onHide={switchModalVisibility}
    >
      <Modal.Header className="border-bottom-0" closeButton />
      <h2 className="mb-4">{text}</h2>
      <Modal.Body className="mx-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <Form.Group className="mb-3  text-left">
              <Form.Control
                name="email"
                ref={register}
                placeholder="E-mail"
                isInvalid={errors.email}
              />
              <ErrorMessage errors={errors} name="email"></ErrorMessage>
            </Form.Group>
          )}
          <Form.Group className="mb-3  text-left">
            <Form.Control
              name="username"
              ref={register}
              placeholder="Username"
              isInvalid={errors.username}
            />
            <ErrorMessage errors={errors} name="username"></ErrorMessage>
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
          {error && (
            <Alert key="erroralert" variant="danger">
              Username or password is invalid
            </Alert>
          )}
          {signupSuccess && (
            <Alert key="erroralert" variant="success">
              Signed up successfully. You can now log in
            </Alert>
          )}
          <Button disabled={loading} type="submit" className="mb-4" block>
            {loading ? <LoadingIndicator /> : text}
          </Button>
          <div className="divider" />
          <Button onClick={switchModalState} className="my-4" block>
            {`Switch to ${oppositeText}`}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = state => ({
  loading: state.authReducer.loading,
  currentUser: state.authReducer.currentUser,
  isLogin: state.authReducer.isLogin,
  isModalVisible: state.authReducer.isModalVisible,
  error: state.authReducer.error,
  signupSuccess: state.authReducer.signupSuccess
});

export default connect(mapStateToProps, {
  login,
  signup,
  switchModalState,
  switchModalVisibility
})(JoinModal);
