import React, { useState } from "react";
import Card from "../cards/Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "../expensesList/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFiltered] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expenses;
