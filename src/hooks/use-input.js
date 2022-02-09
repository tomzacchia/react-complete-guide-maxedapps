import { useState } from "react";

function useInput(validate) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(value);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(event) {
    setValue(event.target.value);
  }

  function inputBlurHandler(event) {
    setIsTouched(true);
  }

  function reset() {
    setValue("");
    setIsTouched(false);
  }

  return {
    value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
