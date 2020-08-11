import React from "react";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  useForm,
  useFieldArray,
  Controller,
  FieldError
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import styles from "./Post.module.css";
import ImageDrop from "./ImageDrop";
import IngredientsField from "./IngredientsField";
import DirectionsField from "./DirectionsField";
import TimeAndServeField from "./TimeAndServeField";
import ChefTipsField from "./ChefTipsField";
import DescriptionField from "./DescriptionField";

const PostForm = () => {
  const { register, errors, handleSubmit, control } = useForm();

  const fieldArrayHook = useFieldArray({
    control,
    name: "deneme"
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DescriptionField />
      <ImageDrop />
      <div className="divider" />
      <TimeAndServeField />
      <div className="divider" />
      <IngredientsField />
      <div className="divider mt-4" />
      <DirectionsField />
      <ChefTipsField />
    </Form>
  );
};

export default PostForm;
