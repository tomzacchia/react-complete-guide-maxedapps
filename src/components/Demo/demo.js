import React from "react";

function Demo(props) {
  console.log("Demo rendering");
  return <p>{props.show ? "This is new!" : ""}</p>;
}

/**
 * NOTE: Memo tells react to check the props that our component, Demo, gets and
 * compare previous and next values of the props. If previous === new, skip rexecution
 * of component.
 *
 * CAUTION 1: memo doubles the memory used by our component, Demo, since React
 * needs to store previous props to compare them to next props.
 *
 * CAUTION 2: 2nd arg to React.memo is a custom comparison function, which
 * is helpful for comparing non-primitive types
 *
 * TRADE OFF: which is less performant? Comparing prev and next props or
 * re-evaluating the component and its component tree. This trade-off
 * varies based on every situation
 */
export default React.memo(Demo);
