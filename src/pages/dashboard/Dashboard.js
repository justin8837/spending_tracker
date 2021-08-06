import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Overview from "./components/Overview";
import AppLayout from "../../components/layouts/AppLayout";
import ExpenseItem from "../../components/expenseItem/ExpenseItem";
const Dashboard = () => {
  return (
    <>
      <NavBar />
      <ExpenseItem />
    </>
  );
};

export default Dashboard;
