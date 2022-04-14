import React from "react";
import Rating from "./Rating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1 className={"border-b border-amber-300"}>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div className={"h-[100px]"} style={{ backgroundColor: color }}></div>
      <Rating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  );
}
