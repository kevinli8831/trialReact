import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
const createArray = (length) => [...Array(length)];

export default function Rating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", ...style }}
        {...props}
      >
        {createArray(totalStars).map((n, i) => (
          <Star
            key={`star${i}`}
            selected={selectedStars > i}
            onSelect={() => {
              setSelectedStars(i + 1);
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
