import React from 'react';
import styles from "./ProfilePage.module.css";
import RecipeCard from "../../components/common/RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProfilePage = () => {
    const tempLink = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*";
    return (
        <Container className="layout justify-content-center">
            <Container className="mb-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={4}>
                        <Row>
                            <Col>
                                <span className={styles.profileImageRounded}>NS</span>
                            </Col>
                            <Col xs={8} style={{minWidth: 207}}>
                                <p className={styles.nameText}>Name Surname</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={styles.recipesCountBox}>
                        <u>RECIPES</u>
                        <p>12</p>
                    </Col>
                    <Col xs={6}>3</Col>
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

export default ProfilePage;

