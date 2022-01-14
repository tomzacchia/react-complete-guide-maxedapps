import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ addNewUserExpenseHandler }) {
  const liftExpenseDataToParentHandler = (formState) => {
    const expenseObjWithID = {
      ...formState,
      id: Math.random().toString(),
    };

    addNewUserExpenseHandler(expenseObjWithID);
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
