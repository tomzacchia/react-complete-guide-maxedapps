import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ addNewExpenseHandler }) {
  const liftExpenseDataToParentHandler = (formState) => {
    const expenseObjWithID = {
      ...formState,
      id: Math.random().toString(),
    };

    addNewExpenseHandler(expenseObjWithID);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        liftExpenseDataToParentHandler={liftExpenseDataToParentHandler}
      />
    </div>
  );
}

export default NewExpense;
