import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import NotFound from "../layouts/NotFound";
import DetailsPage from "../layouts/DetailsPage";

const publicRoutes = () => (
  <Switch>
    <Route exact path="/recipe/:id" component={DetailsPage} />
    <Route exact path="/error" component={ErrorPage} />
    <Route component={NotFound} />
  </Switch>
);

export default publicRoutes;
