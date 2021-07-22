import React from "react";
import TabLayout from "./TabLayout";

const AppLayout = ({ children, pageTitle }) => {
  return (
    <>
      <div className="wrapper">
        <div id="content">
          <TabLayout>{children}</TabLayout>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
