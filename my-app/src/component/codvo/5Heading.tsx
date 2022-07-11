/** @format */

import React from "react";
interface headingProps {
  children: string;
}
const Heading = (props: headingProps) => {
  return (
    <div>
      <div>heading</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Heading;
