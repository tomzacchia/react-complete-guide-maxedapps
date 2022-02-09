import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  /**
   * NOTE: if we want to perform some API request when the form control
   *  goes from invalid to valid, we need to set enteredNameIsValid=false
   *  by default. Because if enteredNameIsValid=true, our side effect is executed
   *  as such we need an additional flag to prevent showing error in UI before
   *  the user has a chance to touch the form field
   */

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("do something, i.e API request to validate user input");
    }
  }, [enteredNameIsValid]);

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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
