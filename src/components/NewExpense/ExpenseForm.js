import "./ExpenseForm.css";
import { useState } from "react";

const INITIAL_STATE = {
  title: "",
  amount: "",
  date: "",
};

function ExpenseForm(props) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const titleChangeHandler = (event) => {
    const userInput = event.target.value;
    const fromStateKey = event.target.name;

    setFormState((previousState) => {
      return { ...previousState, [fromStateKey]: userInput };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log({ ...formState, date: new Date(formState.date) });

    setFormState({ ...INITIAL_STATE });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* COMMENT: Two way binding with forms (Controlled Components)
              - HTML elements maintain their own state based on user input
              - We can make React state a "single source of truth" as such our 
                component handles what happens in our form on subsequent user input
              - this is achieved by setting value attribute on form, display value
                will always be state.value
           */}
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={titleChangeHandler}
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
            onChange={titleChangeHandler}
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
