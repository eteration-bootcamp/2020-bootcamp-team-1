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
              style={{ fontSize: "1.2rem" }}
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
              style={{ fontSize: "1.2rem" }}
            />
            {/* <FieldError/> */}
          </Form.Group>
        </div>
        <div className="divider" />
        {/* INGREDIENTS */}
        <div className="mt-3">
          <Row className="mx-2">
            <h3 className="d-inline-block m-0">Ingredients</h3>
            <Button className="btn-secondary ml-3 py-1" style={{padding:"5px 12px"}}>+</Button>
          </Row>
        </div>
      </Form>
    </Container>
  );
};

export default PostPage;
