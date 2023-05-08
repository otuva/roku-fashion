import React from "react";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

/**
 A React component that represents the help page.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Help = () => {
    return (
        <React.Fragment>
            <FAQ/>
            <ContactUs/>
        </React.Fragment>
    );
}

export default Help;