import Card from "components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem({ title, amount, date }) {
  /* COMMENT: Intro to useState
    - useState(initialValue) returns 1) value of state, stored in our variable, 
    and 2) function for updating our state value
    - the returned method not only updates our state variable value but also
    triggers a re-render of our component
  */
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("New Title");
    console.log(title); // consoles old value since updating state is async (gets scheduled)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
