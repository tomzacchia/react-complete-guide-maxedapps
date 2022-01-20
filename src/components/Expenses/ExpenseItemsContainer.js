import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";
import Card from "components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import _ from "lodash";

function ExpenseItemsContainer({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const updateUserSelectedYear = (year) => {
    setFilteredYear(year);
  };

  const filterByUserSelectedYear = _.curry(filterByYear)(
    parseInt(filteredYear)
  );

  const expenseItemsJSX = expenses
    .filter(filterByUserSelectedYear)
    .map(mapExpenseToJSX);

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

function filterByYear(year, expense) {
  const expenseYear = expense.date.getFullYear();

  return expenseYear === year;
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
