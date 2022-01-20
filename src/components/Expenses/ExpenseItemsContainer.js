import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";
import Card from "components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function ExpenseItemsContainer({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const updateUserSelectedYear = (year) => {
    setFilteredYear(year);

    console.log(`in ExpenseItemsContainer: ${year}`);
  };

  const expenseItemsJSX = expenses.map(mapExpenseToJSX);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={updateUserSelectedYear}
      />

      {expenseItemsJSX}
    </Card>
  );
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

export default ExpenseItemsContainer;
