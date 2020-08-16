import React from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import RecipeCard from "../../components/common/RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getProfile, getPersonRecipes } from "../../actions/profile";

const ProfilePage = ({ loading, displayingProfile, displayingRecipes, getProfile, getPersonRecipes }) => {
    const tempLink = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*";

    // getProfile({ profileID: useParams().id });
    // console.log(displayingProfile);
    // getPersonRecipes({ profileID: useParams().id });
    // console.log(displayingRecipes);

    return (
        <Container className="layout justify-content-center">
            <Container className="mb-3">
                <Row className="d-flex align-items-center">
                    <Col lg={4} md={3} sm={5} xs={5}>
                        <Row>
                            <Col>
                                <span className={styles.profileImageRounded}>NS</span>
                            </Col>
                            <Col style={{minWidth: 200}}>
                                <p className={styles.nameText}>Name Surname</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} md={3} sm={7} xs={7} className={styles.recipesCountBox}>
                        <u>RECIPES</u>
                        <p>12</p>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className={styles.aboutBox}>
                        <u>ABOUT</u>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur hendrerit tellus vitae aliquam. Mauris faucibus consectetur pretium. Sed fermentum elementum tellus, vel vehicula felis dictum nec.</p>
                    </Col>
                </Row>
            </Container>
            <h1>RECIPES</h1>
            <div
                className={styles.Layout}
                style={{
                    textAlign: "center"
                }}
            >
                <RecipeCard
                    item={{
                        title: "Card title, very long title example with some bosch made",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title",
                        description: "Lorem ipsumus",
                        prepTime: "20 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very long e",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very le",
                        description:
                            "Lorem ipsum dolor sdasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very long title example with some bosch made",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very long title example with some bosch made",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very long title example with some bosch made",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very ",
                        description: "Lorem ipsum dolor sit amet as",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very longmade",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />

                <RecipeCard
                    item={{
                        title: "Card title, very longmade",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
                <RecipeCard
                    item={{
                        title: "Card title, very longmade",
                        description:
                            "Lorem ipsum dolor sit amet asdasdasdasd asdasdasdasdsadsadasdasdsa asdasdas dasdwqeqweqweqweasdas dasdaszxczxczx",
                        prepTime: "30 Minutes",
                        image: tempLink
                    }}
                />
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    loading: state.profileReducer.loading,
    displayingProfile: state.profileReducer.displayingProfile,
    displayingRecipes: state.profileReducer.displayingRecipes,
});

export default connect(mapStateToProps, { getProfile, getPersonRecipes })(ProfilePage);

