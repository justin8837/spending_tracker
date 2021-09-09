import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expensesList__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expensesList">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
