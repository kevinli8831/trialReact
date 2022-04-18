import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar
    className={"cursor-pointer"}
    color={selected ? "red" : "grey"}
    onClick={onSelect}
  />
);
const createArray = (length) => [...Array(length)];
console.log(createArray(5), "createArray");
export default function Rating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  // const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div style={{ display: "flex", ...style }}>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={`star${i}`}
            selected={selectedStars > i}
            onSelect={(v) => {
              onRate(i + 1);
              console.log(v, "onSelect");
            }}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}
