import React, { useState } from "react";
import Card from "../cards/Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import ExpenseItem from "../expenseItem/ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFiltered] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
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
    </div>
  );
};

export default Expenses;
