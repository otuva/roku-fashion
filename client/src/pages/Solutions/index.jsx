import * as React from 'react';

import Categories from './Categories';
import HowItWorks from './HowItWorks';

/**
 A React component that represents the solutions page.
 Meant to lure in potential customers.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Solutions = () => {
    return (
        <React.Fragment>
            <Categories/>
            <HowItWorks/>
        </React.Fragment>
    );
}

export default Solutions