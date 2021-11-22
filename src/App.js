import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e4",
      title: "car insurance",
      amount: 293.67,
      date: new Date(2021, 12, 18),
    },
    {
      id: "e4",
      title: "Home Rend",
      amount: 500.0,
      date: new Date(2021, 11, 1),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 343.14,
      date: new Date(2022, 2, 18),
    },
    {
      id: "e4",
      title: "New Laptop",
      amount: 1256,
      date: new Date(2021, 11, 29),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("hello");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
