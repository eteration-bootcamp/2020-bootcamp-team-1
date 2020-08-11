import React from "react";
import { PostForm } from "../../components/Post/";
import Container from "react-bootstrap/Container";

const PostPage = () => {
  return (
    <Container className="layout narrow-layout lower">
      <PostForm />
    </Container>
  );
};

export default PostPage;
