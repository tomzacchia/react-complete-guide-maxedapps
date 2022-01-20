import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {renderExpensesIfLengthGreaterThanZero(expenses)}
    </ul>
  );
};

export default ExpensesList;

/**
 *
 * @param {*} expenses : array of expense items
 */
function renderExpensesIfLengthGreaterThanZero(expenses) {
  const shouldShow = expenses.length > 0;
  let JSX = "";

  shouldShow
    ? (JSX = expenses.map(mapExpenseToJSX))
    : (JSX = <h2 className="expenses-list__fallback"> No Expense Found</h2>);

  return JSX;
}
function mapExpenseToJSX(expense) {
  return (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  );
}
