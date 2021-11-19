import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      <h2>Hello world</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
};

export default App;
