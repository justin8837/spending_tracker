import React from "react";
import { Tabs } from 'react-bootstrap';


const TabLayout = ({ children }) => {


    return (
        <>
            <Tabs
                defaultActiveKey={1}
                id="controlled-tab-example">
                {children}
            </Tabs>
        </>
    );
}

export default TabLayout;