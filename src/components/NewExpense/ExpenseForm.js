import "./ExpenseForm.css";
import { useState } from "react";

const INITIAL_STATE = {
  title: "",
  amount: "",
  date: "",
};

function ExpenseForm({ liftExpenseDataToParentHandler }) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const formControlChangeHandler = (event) => {
    let userInput = event.target.value;
    // Expense Amount should be type Number
    if (event.target.name === "amount") {
      userInput = parseInt(userInput);
    }
    const stateKey = event.target.name;

    setFormState((previousState) => {
      return { ...previousState, [stateKey]: userInput };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    liftExpenseDataToParentHandler({
      ...formState,
      date: new Date(formState.date),
    });

    setFormState({ ...INITIAL_STATE });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={formControlChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formState.amount}
            min="0.1"
            step="0.01"
            onChange={formControlChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formState.date}
            min="2022-01-01"
            max="2024-12-31"
            onChange={formControlChangeHandler}
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
