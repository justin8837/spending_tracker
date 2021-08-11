import React from "react";
import Card from "../cards/Card";
import ExpenseItem from "../expenseItem/ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.spending[0].title}
        amount={props.spending[0].amount}
        date={props.spending[0].date}
      />
      <ExpenseItem
        title={props.spending[1].title}
        amount={props.spending[1].amount}
        date={props.spending[1].date}
      />
      <ExpenseItem
        title={props.spending[2].title}
        amount={props.spending[2].amount}
        date={props.spending[2].date}
      />
      <ExpenseItem
        title={props.spending[3].title}
        amount={props.spending[3].amount}
        date={props.spending[3].date}
      />
    </div>
  );
};

export default Expenses;
