import "./ExpenseForm.css";

const AddNewExpense = () => {
  return (
    <div className="new-expense__actions">
      <button onClick={formToggleHandler}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  );
};

export default AddNewExpense;
