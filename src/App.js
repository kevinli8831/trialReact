import React, { useState } from "react";
import "./App.css";
import ColorList from "./Components/ColorList";
import AddColorForm from "./Components/AddColorForm";
function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

export default App;
