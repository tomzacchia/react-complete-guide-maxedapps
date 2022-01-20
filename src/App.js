import ExpenseItemsContainer from "components/Expenses/ExpenseItemsContainer";
import NewExpense from "components/NewExpense/NewExpense";
import { React, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (expenseObj) => {
    setExpenses((previousState) => {
      return [expenseObj, ...previousState];
    });
  };

  return (
    <div>
      <NewExpense addNewExpenseHandler={addNewExpenseHandler} />
      <ExpenseItemsContainer expenses={expenses} />
    </div>
  );
}

export default App;
