/** @format */

import React, { useState } from "react";
interface authUser {
  name: string;
  email: string;
}
const User = () => {
  //   const [user, setUser] = useState<authUser | null>(null);
  const [user, setUser] = useState<authUser>({} as authUser);
  const handleLogin = () => {
    setUser({ name: "ankit", email: "ankitknit15@gmail.com" });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <div>logged in</div>
      <button onClick={handleLogin}>login</button>
      {/* <button onClick={handleLogout}>logout</button> */}
      {/* <div>user name {user?.name}</div>
      <div>user email {user?.email}</div> */}

      <div>user name {user.name}</div>

      <div>user email {user.email}</div>
    </div>
  );
};

export default User;
