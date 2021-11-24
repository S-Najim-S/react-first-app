import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL__EXPENSES = [
  {
    id: "e2",
    title: "Home Rend",
    amount: 500.0,
    date: new Date(2020, 11, 1),
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 343.14,
    date: new Date(2022, 2, 18),
  },
  {
    id: "e1",
    title: "car insurance",
    amount: 293.67,
    date: new Date(2022, 5, 8),
  },
  {
    id: "e4",
    title: "New Laptop",
    amount: 1256,
    date: new Date(2019, 11, 29),
  },
  { id: "e5", title: "Book keeping", amont: 2020, date: new Date(2022, 4, 22) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL__EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
