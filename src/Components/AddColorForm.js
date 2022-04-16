import React, { useState } from "react";
import { useInput } from "./useInput";

export default function AddColorForm({
  onNewColor = (f) => f,
  isActive,
  onActive = (f) => f,
}) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    console.log(`title:${titleProps.value}`);
    console.log(`color:${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <>
      <button
        type={"button"}
        onClick={onActive}
        className={`m-1 p-1 border-gray-400 rounded border hover:bg-indigo-500 ${
          isActive ? "bg-red-500 text-3xl" : ""
        }`}
      >
        {isActive ? `Off` : `On`}
      </button>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" required placeholder="color title" />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>
    </>
  );
}
