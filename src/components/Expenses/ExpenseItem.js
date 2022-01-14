import Card from "components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem({ title, amount, date }) {
  /* COMMENT: useState in depth
    - entire function body is re-evaluated for instance where state has changed
    - expexpenseTitle = newState, is not what is happening when state changes
    due to the fact that the entire function body re-evaluates as such using const
    is fine. React will return the latest state from array returned by useState
    - state is not re-initialized with props.title on subsequent re-renders
  */
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("New Title");
    console.log(title);
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
