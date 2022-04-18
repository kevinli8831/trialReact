import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "./color-hooks";

export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div className="color-list">
      {colors.map((colors) => (
        <Color key={colors.id} {...colors} />
      ))}
    </div>
  );
}
