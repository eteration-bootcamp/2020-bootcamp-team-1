import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { DetailsImg, DetailsBody } from "../../components/Details";
import { getDetails } from "../../actions/details";

const DetailsPage = ({ loading, recipeDetails }) => {
  const tempImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg";

  getDetails({ recipeID: useParams().id });

  return (
    <Container className="p-0 narrow-layout layout justify-content-center">
      <DetailsImg image={tempImg} />
      <DetailsBody
        chefTips={"Chef Tips"}
        description={"Description"}
        title={"Title"}
        directions={[]}
        ingredients={[]}
        prepTime={"10 Minutes"}
        serving={"3 Portions"}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.detailsReducer.loading,
  recipeDetails: state.detailsReducer.recipeDetails,
});

export default connect(mapStateToProps, { getDetails })(DetailsPage);
