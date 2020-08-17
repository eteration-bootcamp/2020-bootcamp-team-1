import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import RecipeCard from "../../components/common/RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getProfile, getPersonRecipes } from "../../actions/profile";
import LoadingIndicator from "../../components/common/LoadingIndicator";

const ProfilePage = ({
  loading,
  displayingProfile,
  displayingRecipes,
  getProfile,
  getPersonRecipes,
}) => {
  const tempLink =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*";

  const { id } = useParams();
  useEffect(() => {
    getProfile({ profileID: id });
    getPersonRecipes({ profileID: id });
  }, [getProfile, getPersonRecipes]);

  const username = displayingProfile.username;

  if (loading) return <LoadingIndicator fullScreen={true} />;

  return (
    <Container className="layout justify-content-center">
      <Container className="mb-3">
        <Row className="d-flex align-items-center">
          <Col xl={4} lg={4} md={3} sm={5} xs={5}>
            <Row>
              <Col xl={4}>
                <span className={styles.profileImageRounded}>
                  {username ? username.charAt(0) : "NS"}
                </span>
              </Col>
              <Col xl={8} style={{ minWidth: 200 }}>
                <p className={styles.nameText}>
                  {username ? username : "Name Surname"}
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            xl={2}
            lg={2}
            md={3}
            sm={7}
            xs={7}
            className={styles.recipesCountBox}
          >
            <u>RECIPES</u>
            <p>{displayingRecipes.length}</p>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className={styles.aboutBox}>
            <u>ABOUT</u>
            <p>
              {displayingProfile.about
                ? displayingProfile.about
                : "There is no about info available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim rutrum diam non aliquam."}
            </p>
          </Col>
        </Row>
      </Container>
      <h1>RECIPES</h1>
      <div
        className={styles.Layout}
        style={{
          textAlign: "center",
        }}
      >
        {displayingRecipes &&
          Object.values(displayingRecipes).map((displayingRecipe) => (
            <RecipeCard
              key={displayingRecipe.id}
              item={{
                title: displayingRecipe.title,
                description: displayingRecipe.description,
                prepTime: displayingRecipe.prepTime,
                image: displayingRecipe.image,
              }}
            />
          ))}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.profileReducer.loading,
  displayingProfile: state.profileReducer.displayingProfile,
  displayingRecipes: state.profileReducer.displayingRecipes,
});

export default connect(mapStateToProps, { getProfile, getPersonRecipes })(
  ProfilePage
);
