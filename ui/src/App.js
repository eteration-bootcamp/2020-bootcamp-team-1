import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import ErrorPage from "./layouts/ErrorPage";
import NotFound from "./layouts/NotFound";
import DetailsPage from "./layouts/DetailsPage";
import PostPage from "./layouts/PostPage";
import ProfilePage from "./layouts/ProfilePage";
import Navbar from "./components/Navbar";
import Requestor from "./layouts/Requestor";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <Switch>
              <Route exact path="/recipe/:id" component={DetailsPage} />
              <Route exact path="/postman" component={Requestor} />
              <Route exact path="/new" component={PostPage} />
              <Route exact path="/profile/:id" component={ProfilePage} />
              <Route exact path="/error" component={ErrorPage} />
              <Route component={NotFound} />
            </Switch>
          );
        }}
      ></Route>
      <Footer />
    </Fragment>
  );
}

export default App;
