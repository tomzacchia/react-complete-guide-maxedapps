import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const isFormValid = firstNameIsValid;

  function submitHanlder(e) {
    e.preventDefault();

    if (!isFormValid) return;

    console.log(firstName);
    firstNameReset();
  }

  return (
    <form onSubmit={submitHanlder}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={firstName}
          />
          {firstNameHasError && <p>firstName has error</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
