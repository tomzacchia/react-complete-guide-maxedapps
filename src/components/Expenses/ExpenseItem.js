import Card from "components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  /* COMMENT: How Component functions are executed
    When we used our custom components in JSX, i.e <Card />, React is aware that it
    must execute our functions, which return JSX (cycle repeats until all functions
    have been executed). All functions are executed once at runtime unless state changes
  */
  const clickHandler = () => {
    title = "New title";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* COMMENT: Adding event listeners to Nodes
        React exposes default Element events, starting with on
        callbacks are added to callback queue
      */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
