import React from "react";
import styles from "./Post.module.css";
import AddImageSvg from "../svgs/AddImageSvg";
import Dropzone from "react-dropzone";
import { imgName } from "./postFieldNames";

const ImageDrop = () => {
  return (
    <div className={styles.Dropzone + " mb-4"}>
      <AddImageSvg />
      <p>Upload your recipe's photo</p>
    </div>
  );
};

export default ImageDrop;
