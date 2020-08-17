import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./routes";
import { connect } from "react-redux";
import { autoLogin } from "./actions/auth";

function App({ currentUser, autoLogin }) {
  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <Fragment>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return <Router isLoggedIn={currentUser.id} />;
        }}
      ></Route>
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(mapStateToProps, { autoLogin })(App);
