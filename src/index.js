import React, { createContext, useState } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import colorData from "./data/color-data.json";
import reportWebVitals from "./reportWebVitals";
const container = document.getElementById("root");
const root = createRoot(container);

export const ColorContext = createContext(undefined);
export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  return root.render(
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
