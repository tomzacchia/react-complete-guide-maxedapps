import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";
import Card from "components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function ExpenseItemsContainer({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("");
  const updateUserSelectedYear = (year) => {
    setFilteredYear(year);

    console.log(`in ExpenseItemsContainer: ${year}`);
  };

  const expenseItemsJSX = expenses.map((expense, index) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={index}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={updateUserSelectedYear} />

      {expenseItemsJSX}
    </Card>
  );
}

export default ExpenseItemsContainer;
