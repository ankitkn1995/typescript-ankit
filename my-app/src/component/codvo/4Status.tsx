/** @format */

import React from "react";
// interface StatusProps {
//   status: string;
// }

interface StatusProps {
  status: "loading" | "error" | "success";
}
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "data fetched success";
  } else if (props.status === "error") {
    message = "error";
  }
  return (
    <div>
      <div>Status {message}</div>
    </div>
  );
};

export default Status;
