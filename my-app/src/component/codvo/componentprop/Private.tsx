/** @format */

import React, { Component } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

interface PrivateProps {
  isLogedIn: boolean;
  component: React.ComponentType<ProfileProps>;
}
const Private = ({ isLogedIn, component: Component }: PrivateProps) => {
  if (isLogedIn) {
    return <Component name={"ankit"} />;
  } else {
    return <Login />;
  }
};

export default Private;
