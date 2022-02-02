import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  /**
   * NOTE: React compares virtual DOM diffs and passes those diffs to ReactDOM
   * which takes care of rendering these changes. Clicking on Button only
   * makes the second h1 flash in devTools
   */
  const [showParagraph, setShowParagraph] = useState(false);

  function toggleParagraph() {
    setShowParagraph((prevState) => !prevState);
  }

  console.log("App running ");

  return (
    <div className="app">
      <Button onClick={toggleParagraph}> Toggle Paragraph </Button>
      <h1>Hi there!</h1>
      {showParagraph && <h1>This is new!</h1>}
    </div>
  );
}

export default App;
