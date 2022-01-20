import Card from "components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem({ title, amount, date }) {
  const [expenseTitle, setExpenseTitle] = useState(title);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
