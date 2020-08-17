import React from "react";
import { PostForm } from "../../components/Post/";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { createRecipe } from "../../actions/post";

const PostPage = ({ createRecipe }) => {
  return (
    <Container className="layout narrow-layout lower">
      <PostForm createRecipe={createRecipe} />
    </Container>
  );
};

export default connect(null, { createRecipe })(PostPage);
