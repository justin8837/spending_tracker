import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  return (
    <form>
      <div className="newExpense__controls">
        <div className="newExpense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="newExpense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="newExpense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2021-12-31" />
        </div>
      </div>
      <div className="newExpense__actions">
        <button type="submit"></button>
      </div>
    </form>
  );
};

export default ExpenseForm;
