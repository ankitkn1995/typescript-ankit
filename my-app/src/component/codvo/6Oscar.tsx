/** @format */

import React from "react";
interface oscarProps {
  children: React.ReactNode;
}
const Oscar = (props: oscarProps) => {
  return (
    <div>
      <div>Oscar</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Oscar;
