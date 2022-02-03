import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "components/Demo/demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  /**
   * CAUTION: When the function is defined and saved in memory it's closure
   * holds a reference to the value that allowToggle points to  (false). If we
   * do not specify allowToggle as a dependency of toggleParagraph,
   * allowToggle within toggleParagraph()'s "backpack" will be stale
   */
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, []);

  function allowToggleHandler() {
    setAllowToggle(true);
  }

  console.log("App running ");

  return (
    <div className="app">
      <Button onClick={allowToggleHandler}> Allow Paragraph Toggle </Button>
      <Button onClick={toggleParagraph}> Toggle Paragraph </Button>
      <h1>Hi there!</h1>
      <Demo show={false} />
    </div>
  );
}

export default App;
