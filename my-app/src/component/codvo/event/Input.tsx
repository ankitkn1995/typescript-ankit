/** @format */

import React from "react";
interface inputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: inputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <div>input</div>
      <div>
        <input
          type={"text"}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
