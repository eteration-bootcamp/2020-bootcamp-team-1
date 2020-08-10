import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";

import HomePage from "./layouts/HomePage";
import ErrorPage from "./layouts/ErrorPage";
import NotFound from "./layouts/NotFound";
import DetailsPage from "./layouts/DetailsPage";
import PostPage from "./layouts/PostPage";
import ProfilePage from "./layouts/ProfilePage";
import Navbar from "./components/Navbar";
import Fab from "./components/common/Fab";
import Image from "react-bootstrap/Image";
import Avatar from "./components/common/Avatar";

function App() {
  return (
    <Fragment>
      <Navbar
        actions={() => (
          <Fragment>
            <Button className="mr-3 hide-below-medium">
              Create New Recipe
            </Button>
            <Avatar name="Tarık Qöprülü Gonzales di caprio" />
            {/* <Button>Join</Button> */}
          </Fragment>
        )}
      />
      <Fab />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <Switch>
              <Route exact path="/recipe/:id" component={DetailsPage} />
              <Route exact path="/new" component={PostPage} />
              <Route exact path="/profile/:id" component={ProfilePage} />
              <Route exact path="/error" component={ErrorPage} />
              <Route component={NotFound} />
            </Switch>
          );
        }}
      ></Route>
    </Fragment>
  );
}

export default App;
