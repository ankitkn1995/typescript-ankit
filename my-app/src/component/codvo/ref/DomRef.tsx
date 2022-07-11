/** @format */

import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <div>Dom Ref</div>
      <div>
        <input type={"text"} ref={inputRef} />
      </div>
    </div>
  );
};

export default DomRef;
