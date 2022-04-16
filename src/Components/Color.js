import React from "react";
import Rating from "./Rating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  className,
  style,
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section className={className} style={style}>
      <h1 className={"border-b border-amber-300"}>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div className={"h-[100px]"} style={{ backgroundColor: color }} />
      <Rating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  );
}
