import React, { useEffect } from "react";
import { connect } from "react-redux";

import PublicRoutes from "./publicRoutes";
import UserRoutes from "./userRoutes";
import { autoLogin } from "../actions/auth";

const Routes = ({ currentUser: { id }, autoLogin }) => {
  // useEffect(() => {
  //   autoLogin();
  // }, [autoLogin]);

  if (id) return <UserRoutes />;
  return <PublicRoutes />;
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(mapStateToProps, { autoLogin })(Routes);
