import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    const userInput = event.target.value;
    const fromStateKey = event.target.name;
    /* COMMENT: Updating state that depends on previous state
      In certain cases if our state update depends on previous state and
      we are making multiple updates to the same state we could be
      referencing an out of date value. To minimize edge cases the 
      safest option is to pass a callback to setState()
    */
    setFormState((previousState) => {
      return { ...previousState, [fromStateKey]: userInput };
    });
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
