import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");

  // const titleChangeHandler = (event) => {
  //   const enteredTitle = event.target.value;
  //   setEnteredTitle(enteredTitle);
  // };

  /* COMMENT: Handling multiple inputs
    We can either have individual states and/or handlers for each state
    or we can hold related states in one data structure. Here we choose
    to funnel all form controls into one handler, using name attribute
    on control to determine which property in formState needs to be updated
  */
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    const userInput = event.target.value;
    const fromStateKey = event.target.name;
    setFormState({ ...formState, [fromStateKey]: userInput });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.1"
            step="0.01"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
