import React from "react";

function Demo(props) {
  console.log("Demo rendering");
  return <p>{props.show ? "This is new!" : ""}</p>;
}

export default React.memo(Demo);
