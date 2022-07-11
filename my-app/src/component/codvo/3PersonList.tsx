/** @format */

import React from "react";
interface personListProps {
  names: {
    fname: string;
    lname: string;
  }[];
}
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <>
            <div> {name.fname}</div>
            <div>{name.lname}</div>
          </>
        );
      })}
    </div>
  );
};
export default PersonList;
