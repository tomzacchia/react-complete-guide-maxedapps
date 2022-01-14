import "./ExpenseItemsContainer.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

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
  return <Card className="expenses">{expenseItemsJSX}</Card>;
}

export default ExpenseItemsContainer;
