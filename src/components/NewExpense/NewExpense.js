import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (perops) => {
  const addExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    perops.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={addExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
