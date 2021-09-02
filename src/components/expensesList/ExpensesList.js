import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses Found!</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
};

export default ExpensesList;
