import React from "react";
import "./App.css";
import ColorList from "./Components/ColorList";
import AddColorForm from "./Components/AddColorForm";
import { useColors } from "./Components/color-hooks";

function App() {
  const { isActive } = useColors();
  return (
    <>
      <AddColorForm />
      {isActive && <ColorList />}
    </>
  );
}

export default App;
