/** @format */

import React from "react";
interface containerProps {
  styles: React.CSSProperties;
}
const Container = (props: containerProps) => {
  return (
    <div>
      <div style={props.styles}>container</div>
    </div>
  );
};

export default Container;
