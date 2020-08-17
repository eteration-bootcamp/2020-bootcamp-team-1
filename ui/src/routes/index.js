import React from "react";

import PublicRoutes from "./publicRoutes";
import UserRoutes from "./userRoutes";

const Routes = ({ isLoggedIn }) => {
  if (isLoggedIn) return <UserRoutes />;
  return <PublicRoutes />;
};

export default Routes;
