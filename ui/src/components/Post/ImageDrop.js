import React, { useEffect, Fragment } from "react";
import styles from "./Post.module.css";
import AddImageSvg from "../svgs/AddImageSvg";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import Button from "react-bootstrap/Button";

const ImageDrop = ({ onImgDrop, image }) => {
  const onDrop = useCallback(
    acceptedFile => {
      let reader = new FileReader();
      reader.readAsDataURL(acceptedFile[0]);
      reader.onload = () => {
        onImgDrop({
          preview: URL.createObjectURL(acceptedFile[0]),
          base64: reader.result
        });
      };
    },
    [onImgDrop] // COULD CAUSE BUG
  );

  const {
    getRootProps,
    getInputProps
    // isDragActive,
    // isDragAccept,
    // isDragReject
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpeg, image/png"
  });

  useEffect(() => {
    image && URL.revokeObjectURL(image.preview);
  }, [image]);

  return (
    <div className={styles.Dropzone + " mb-4"} {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? (
        <Fragment>
          <img
            alt=""
            src={image.preview}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <Button
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={e => {
              e.stopPropagation();
              onImgDrop(null);
            }}
          >
            X
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <AddImageSvg />
          <p>Upload your recipe's photo</p>
        </Fragment>
      )}
    </div>
  );
};

export default ImageDrop;
