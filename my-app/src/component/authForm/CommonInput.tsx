/** @format */

import React, { useState } from "react";
interface inputPropsType {
  label: string;
  errorMessage?: string;
  onChange: () => void;
  id: number;
  placeholder: string;
  name: string;
  required?: boolean;
}

const CommonInput = (props: inputPropsType) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e: React.FormEvent<HTMLInputElement>): void => {
    setFocused(true);
  };
  return (
    <div>
      <div>CommonInput</div>
      <div>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          //focused={focused.toString()}
        />
      </div>
    </div>
  );
};

export default CommonInput;
