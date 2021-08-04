import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Overview from "./components/Overview";
import AppLayout from '../../components/layouts/AppLayout';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <AppLayout pageTitle = {"Dashboard"}>

      </AppLayout>
    </>
  );
};

export default Dashboard;
