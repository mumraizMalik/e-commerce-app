import React, { createContext } from "react";
import { theme1 } from "../Styles/Colors";
export const ThemeColorContext = createContext({
  color: theme1,
  changeColor: (color) => {},
});
