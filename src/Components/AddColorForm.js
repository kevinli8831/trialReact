import React, { useState } from "react";
import { useInput } from "./useInput";
import { useColors } from "./color-hooks";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor, isActive, switchActive } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    console.log(`title:${titleProps.value}`);
    console.log(`color:${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <>
      <button
        type={"button"}
        onClick={switchActive}
        className={`m-1 p-1 border-gray-400 rounded border hover:bg-indigo-500 ${
          isActive ? "bg-red-500 text-3xl" : ""
        }`}
      >
        {isActive ? `Off` : `On`}
      </button>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          required
          placeholder="color title"
          className="border-2 border-gray-400 p-1"
        />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>
    </>
  );
}
