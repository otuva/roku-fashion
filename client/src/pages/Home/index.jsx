import * as React from 'react';

import Intro from './Intro';
import IconText from "./IconText";
import GetHelp from "./GetHelp";

/**
 A React component that represents the home page.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Home = () => (
    <React.Fragment>
        <Intro/>
        <IconText/>
        <GetHelp/>
    </React.Fragment>
);

export default Home
