import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  return <div>{expenseItems}</div>;
}

export default Expenses;
