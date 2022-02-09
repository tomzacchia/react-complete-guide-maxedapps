import { useRef, useState } from "react";
const SimpleInput = (props) => {
  /**
   *  NOTE: ref is practical when we only care about value on submission
   *  - with controlled components we can also reset field values on submission
   *  - we can reset fields using ref via ref.current.value = '', however direct DOM manipulation is not recommended
   */

  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    console.log(enteredName);
    console.log(nameInputRef.current.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
