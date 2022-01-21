import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputInvalid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // remove whitespace from user input
    if (enteredValue.trim().length === 0) {
      setIsInputInvalid(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isInputInvalid && "invalid"}`}>
        {/* <label style={{ color: !isInputValueValid ? "red" : "black" }}> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
