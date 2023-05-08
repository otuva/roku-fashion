import * as React from 'react';
import TemporaryDrawer from './TemporaryDrawer';
import Content from './Content';

/**
 A React component that represents the dashboard page.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Dashboard = () => (
    <React.Fragment>
        <TemporaryDrawer/>
        <Content/>
    </React.Fragment>
);
export default Dashboard
