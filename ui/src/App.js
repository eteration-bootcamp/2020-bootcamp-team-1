import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./routes";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return <Router />;
        }}
      ></Route>
      <Footer />
    </Fragment>
  );
}

export default App;
