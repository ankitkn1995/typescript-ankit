/** @format */

import React, { useState } from "react";
import CommonInput from "./CommonInput";

const AuthForm = () => {
  const [formVal, setFormVal] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: formVal.password,
      required: true,
    },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const onChange = () => {};
  return (
    <div>
      {inputs.map((item, index) => (
        <CommonInput
          id={item.id}
          name={item.name}
          errorMessage={item.errorMessage}
          placeholder={item.placeholder}
          label={item.label}
          required={item.required}
          onChange={onChange}
        />
      ))}
      <button type='submit' onSubmit={handleSubmit}>
        submit
      </button>
    </div>
  );
};
export default AuthForm;
