import React from "react";
import Rating from "./Rating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./color-hooks";

export default function Color({ className, style, id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section className={className} style={style}>
      <h1 className={"border-b border-amber-300"}>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div className={"h-[100px]"} style={{ backgroundColor: color }} />
      <Rating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
