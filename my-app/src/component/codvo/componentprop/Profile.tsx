/** @format */

import React from "react";
export interface ProfileProps {
  name: string;
}
const Profile = ({ name }: ProfileProps) => {
  return <div>{name}</div>;
};

export default Profile;
