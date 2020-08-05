import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./layouts/HomePage";
import ErrorPage from "./layouts/ErrorPage";
import NotFound from "./layouts/NotFound";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <Switch>
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
