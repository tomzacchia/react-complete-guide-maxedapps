import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "components/Demo/demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  function toggleParagraph() {
    setShowParagraph((prevState) => !prevState);
  }

  console.log("App running ");

  return (
    <div className="app">
      <Button onClick={toggleParagraph}> Toggle Paragraph </Button>
      <h1>Hi there!</h1>
      <Demo show={false} />
    </div>
  );
}

export default App;
