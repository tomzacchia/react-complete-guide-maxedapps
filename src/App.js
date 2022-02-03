import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "components/Demo/demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  /**
   * NOTE: useCallback tells React to store function body somewhere in internal
   * memory and refernce that definition instead of passing down a different
   * reference. usecallback is used with React.memo to prevent re-evaluating
   * children components.
   *
   * NOTE: useState handlers are memoized, therefore not needed in depedency array
   */
  const toggleParagraph = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

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
