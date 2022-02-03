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
      {/* 
        NOTE: In the case where an attribute's value never changes the function body
        of our custom components still re-execute since <Demo /> is a function call
        in the function body of <App />. The only difference is that JSX returned by <Demo />
        might produce shadow DOM diffs depending on logic inside of <Demo />. 
      */}
      <Demo show={false} />
    </div>
  );
}

export default App;
