import { useState } from "react";

/**
 * NOTE: in <SimpleInput /> we only have one input but supposed we add
 * a form control for entering an email address. The email form control
 * would have very similar states to manage whether or not the user input
 * is valid. As such we can abstract that into a reusable hook. Since
 * the validation for a email field is different we pass in validate as
 * a callback into the hook.
 */
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
