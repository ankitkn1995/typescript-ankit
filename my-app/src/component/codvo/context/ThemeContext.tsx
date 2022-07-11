/** @format */

import React, { createContext } from "react";
import { theme } from "./Theme";

interface ThemeContextProps {
  children: React.ReactNode;
}
export const ThemeContexts = createContext(theme);
const ThemeContext = ({ children }: ThemeContextProps) => {
  return (
    <div>
      <div>Theme context</div>
      <ThemeContexts.Provider value={theme}></ThemeContexts.Provider>
    </div>
  );
};

export default ThemeContext;
