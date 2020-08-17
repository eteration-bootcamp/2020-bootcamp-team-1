import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Feed } from "../../components/Home";
import { connect } from "react-redux";
import { getAllRecipes } from "../../actions/home";
import LoadingIndicator from "../../components/common/LoadingIndicator";

const HomePage = ({ getAllRecipes, recipes, loading }) => {
  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  if (loading) return <LoadingIndicator fullScreen={true} />;

  return (
    <Container className="layout justify-content-center">
      <Feed recipes={recipes} />
    </Container>
  );
};

const mapStateToProps = state => ({
  recipes: state.homeReducer.recipes,
  loading: state.homeReducer.loading
});

export default connect(mapStateToProps, { getAllRecipes })(HomePage);
