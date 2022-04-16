import React from "react";
import Color from "./Color";
export default function ColorList({
  colors = [],
  onRemoveColor = (f) => {
    console.log(f, "onRemoveColor");
  },
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          className="my-10"
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
