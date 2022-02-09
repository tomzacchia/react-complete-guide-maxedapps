import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  /**
   * Note: enteredNameIsValid is dependent on the enteredName state,
   * since our component function body is re-evaluated on every state change
   * we can create a new constant for each re-render. formSubmitHandler()
   * will also have access to fresh enteredNameIsValid flag
   */
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  }

  function nameInputBlurHandler(event) {
    setEnteredNameTouched(true);
    // if (event.target.value.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);

    // reset controlled input state on submission
    setEnteredName("");
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
