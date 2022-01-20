import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";
import Card from "components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import _ from "lodash";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseItemsContainer({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const updateUserSelectedYear = (year) => {
    setFilteredYear(year);
  };

  const filterByUserSelectedYear = _.curry(filterByYear)(
    parseInt(filteredYear)
  );

  const expenseItemsFiltered = expenses.filter(filterByUserSelectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={updateUserSelectedYear}
      />
      <ExpensesChart expenses={expenseItemsFiltered} />
      <ExpensesList expenses={expenseItemsFiltered} />
    </Card>
  );
}

export default ExpenseItemsContainer;

function filterByYear(year, expense) {
  const expenseYear = expense.date.getFullYear();

  return expenseYear === year;
}
