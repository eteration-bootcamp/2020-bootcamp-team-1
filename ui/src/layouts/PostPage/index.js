import React from "react";
import { PostForm } from "../../components/Post/";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { createRecipe } from "../../actions/post";

const PostPage = ({ createRecipe, loading, error, postSuccessful }) => {
  return (
    <Container className="layout narrow-layout lower">
      <PostForm
        createRecipe={createRecipe}
        loading={loading}
        error={error}
        postSuccessful={postSuccessful}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  loading: state.postReducer.loading,
  error: state.postReducer.error,
  postSuccessful: state.postReducer.postSuccessful
});

export default connect(mapStateToProps, { createRecipe })(PostPage);
