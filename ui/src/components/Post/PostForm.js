import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

import ImageDrop from "./ImageDrop";
import IngredientsField from "./IngredientsField";
import DirectionsField from "./DirectionsField";
import TimeAndServeField from "./TimeAndServeField";
import ChefTipsField from "./ChefTipsField";
import DescriptionField from "./DescriptionField";
import TitleField from "./TitleField";
import ActionButton from "../ActionButton";
import {
  ctipName,
  descName,
  dirsName,
  imgName,
  ingName,
  servName,
  timeName,
  titleName
} from "./postFieldNames";

const PostForm = () => {
  const reqMsg = "Required";

  const [img, setImg] = useState(null);

  const maxMsg = max => `Must be lower than ${max} characters`;

  const PostSchema = yup.object().shape({
    [ctipName]: yup.string().max(50),
    [descName]: yup
      .string()
      .required(reqMsg)
      .max(200, maxMsg(200)),
    [servName]: yup
      .string()
      .required(reqMsg)
      .max(50, maxMsg(50)),
    [timeName]: yup
      .string()
      .required(reqMsg)
      .max(50, maxMsg(50)),
    [titleName]: yup
      .string()
      .required(reqMsg)
      .max(100, maxMsg(100))
  });

  const {
    register,
    errors,
    handleSubmit,
    control,
    setValue
  } = useForm({ resolver: yupResolver(PostSchema) });

  const ingredientArray = useFieldArray({ control, name: ingName });

  const directionArray = useFieldArray({ control, name: dirsName });

  const onSubmit = values => {
    const newValues = {
      ...values,
      ...(img && { [imgName]: img.base64 }),
      directions: [
        ...values.directions.map((direction, index) => {
          return { ...direction, stepNumber: index + 1 };
        })
      ]
    };
    console.log(newValues);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleField errors={errors} register={register} />
        <DescriptionField register={register} errors={errors} />
        <ImageDrop onImgDrop={setImg} image={img} />
        <div className="divider" />
        <TimeAndServeField register={register} errors={errors} />
        <div className="divider" />
        <IngredientsField
          register={register}
          useFieldArray={ingredientArray}
          setValue={setValue}
        />
        <div className="divider mt-4" />
        <DirectionsField
          register={register}
          useFieldArray={directionArray}
          setValue={setValue}
        />
        <ChefTipsField register={register} errors={errors} />
        <ActionButton
          isLoggedIn={true}
          isPost={true}
          onClick={handleSubmit(onSubmit)}
        />
      </Form>
    </div>
  );
};

export default PostForm;
