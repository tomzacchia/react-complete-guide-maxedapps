import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemsContainer({ expenses }) {
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
  return <div>{expenseItemsJSX}</div>;
}

export default ExpenseItemsContainer;
