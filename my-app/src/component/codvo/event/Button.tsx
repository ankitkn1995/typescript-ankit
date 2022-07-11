/** @format */

import React from "react";
interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
const Button = (props: buttonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Button</button>
    </div>
  );
};

export default Button;
