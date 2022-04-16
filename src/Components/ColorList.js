import React, { useContext } from "react";
import Color from "./Color";
import { ColorContext } from "../index";
export default function ColorList() {
  const { colors } = useContext(ColorContext);
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color className="my-10" key={color.id} {...color} />
      ))}
    </div>
  );
}
