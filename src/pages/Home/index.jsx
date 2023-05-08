import * as React from 'react';

import Intro from './Intro';
import IconText from "./IconText";
import GetHelp from "./GetHelp";

function Home() {
    return (
        <React.Fragment>
            <Intro/>
            <IconText/>
            <GetHelp/>
        </React.Fragment>
    );
}

export default Home
