import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import NotFound from "../layouts/NotFound";
import DetailsPage from "../layouts/DetailsPage";
import PostPage from "../layouts/PostPage";
import ProfilePage from "../layouts/ProfilePage";
import Requestor from "../layouts/Requestor";

const userRoutes = () => {
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
};

export default userRoutes;
