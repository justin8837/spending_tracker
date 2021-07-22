import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import MoreInfo from "../moreInfo/MoreInfo";
import AppLayout from "../../components/layouts/AppLayout";
import TabLayout from "../../components/layouts/TabLayout";

const Home = () => {
  return (
    <>
      <AppLayout>
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </AppLayout>
    </>
  );
};

export default Home;
