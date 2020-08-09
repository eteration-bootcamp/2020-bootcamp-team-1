import React from "react";
import styles from "./PostPage.module.css";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  useForm,
  useFieldArray,
  Controller,
  FieldError
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropzone from "react-dropzone";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddImageSvg from "../../components/svgs/AddImageSvg";

const PostPage = () => {
  const { register, errors, handleSubmit, control } = useForm();

  const fieldArrayHook = useFieldArray({
    control,
    name: "deneme"
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Container className="layout narrow-layout lower">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* TITLE */}
        <Form.Group>
          <Form.Control
            name="name"
            placeholder="Title of your recipé"
            size="lg"
            isInvalid={errors.n}
            ref={register({
              required: "Title is required",
              validate: value =>
                true || "Password must be 3 characters at minimum"
            })}
            style={{ fontWeight: 700, fontSize: "32px" }}
          />
          {/* <FieldError/> */}
        </Form.Group>
        {/* DESCRIPTION */}
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="3"
            name="name"
            placeholder="Tell us about your recipe"
            isInvalid={errors.n}
            ref={register({
              required: "Title is required",
              validate: value =>
                true || "Password must be 3 characters at minimum"
            })}
            style={{ fontSize: "1.2rem" }}
          />
          {/* <FieldError/> */}
        </Form.Group>
        {/* DROPZONE */}
        <div className={styles.Dropzone + " mb-4"}>
          <AddImageSvg />
          <p>Upload your recipe's photo</p>
        </div>
        <div className="divider" />
        {/* TIME AND SERVE */}
        <div className="my-4 d-flex justify-content-between flex-wrap">
          <Form.Group className="col-lg-5 col-md-5 col-12">
            <Form.Control
              name="name"
              placeholder="Cooking time"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
              style={{ fontSize: "1.1rem" }}
            />
            {/* <FieldError/> */}
          </Form.Group>
          <Form.Group className="col-lg-5 col-md-5 col-12">
            <Form.Control
              name="name"
              placeholder="Servings"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
              style={{ fontSize: "1.1rem" }}
            />
            {/* <FieldError/> */}
          </Form.Group>
        </div>
        <div className="divider" />
        {/* INGREDIENTS */}
        <div className="mt-3">
          <Row className="mx-2">
            <h3 className="d-inline-block m-0">Ingredients</h3>
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "5px 12px" }}
            >
              +
            </Button>
          </Row>
          <Row className="mx-2 mt-3">
            <Form.Control
              className={styles.Fluid}
              name="name"
              placeholder="Ingredient"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
          <Row className="mx-2 mt-3">
            <Form.Control
              className={styles.Fluid}
              name="name"
              placeholder="Ingredient"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
          <Row className="mx-2 mt-3">
            <Form.Control
              className={styles.Fluid}
              name="name"
              placeholder="Ingredient"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
        </div>
        <div className="divider mt-4" />
        {/* STEPS */}
        <div className="mt-3 mb-5">
          <Row className="mx-2">
            <h3 className="d-inline-block m-0">Directions</h3>
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "5px 12px" }}
            >
              +
            </Button>
          </Row>
          <Row className="mx-2 mt-3 ds">
            <Form.Control
              className={styles.Fluid}
              as="textarea"
              rows="2"
              name="name"
              placeholder="Directions"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
          <Row className="mx-2 mt-3 ds">
            <Form.Control
              className={styles.Fluid}
              as="textarea"
              rows="2"
              name="name"
              placeholder="Directions"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
          <Row className="mx-2 mt-3 ds">
            <Form.Control
              className={styles.Fluid}
              as="textarea"
              rows="2"
              name="name"
              placeholder="Directions"
              isInvalid={errors.n}
              ref={register({
                required: "Title is required",
                validate: value =>
                  true || "Password must be 3 characters at minimum"
              })}
            />
            <Button
              className="btn-secondary ml-3 py-1"
              style={{ padding: "2px 13px" }}
            >
              x
            </Button>
          </Row>
        </div>
        <Form.Control
          className="mb-5 mx-2"
          as="textarea"
          rows="3"
          name="name"
          placeholder="Chef Tips"
          isInvalid={errors.n}
          ref={register({
            required: "Title is required",
            validate: value =>
              true || "Password must be 3 characters at minimum"
          })}
        />
      </Form>
    </Container>
  );
};

export default PostPage;
