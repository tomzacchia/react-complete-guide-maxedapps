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

  const expenseItemsFiltered = expenses.filter(filterByUserSelectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={updateUserSelectedYear}
      />

      {/* 
        NOTE: && can be used to replace falg ? <Component /> : null statements 
        RESOURCE: https://www.chakshunyu.com/blog/react-readability-analysis-of-inline-conditional-rendering/
      */}
      {renderExpensesIfLengthGreaterThanZero(expenseItemsFiltered)}
    </Card>
  );
}

/**
 *
 * @param {*} expenses : array of expense items
 */
function renderExpensesIfLengthGreaterThanZero(expenses) {
  const shouldShow = expenses.length > 0;
  let JSX = "";

  shouldShow
    ? (JSX = expenses.map(mapExpenseToJSX))
    : (JSX = <p> No Expense Found</p>);

  return JSX;
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
