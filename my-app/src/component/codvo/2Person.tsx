/** @format */

import React from "react";

interface PersonProps {
  name: {
    fname: string;
    lname: string;
  };
}
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.fname} {props.name.lname}
    </div>
  );
};

export default Person;
