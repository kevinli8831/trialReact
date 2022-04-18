import React, { createContext, useContext, useState } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
export default function ColorProvider({ children }) {
  const [isActive, setActive] = useState(false);
  const [colors, setColors] = useState(colorData);
  const addColor = (title, color) =>
    setColors([...colors, { id: v4(), rating: 0, title, color }]);

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));
  const switchActive = () => setActive(!isActive);
  return (
    <ColorContext.Provider
      value={{
        colors,
        isActive,
        switchActive,
        addColor,
        removeColor,
        rateColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
