/** @format */

import React, { useContext } from "react";
import { ThemeContexts } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContexts);
  return (
    <div>
      <div>Box</div>
      <div style={{ backgroundColor: theme.primary.main }}>
        theme box context
      </div>
    </div>
  );
};

export default Box;
