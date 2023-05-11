import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";


/**
 A Higher-Order Component that conditionally renders a given component if the user is authenticated, otherwise redirects to the sign-in page.
 @param {JSX.Element} Component - The component to render if the user is authenticated
 @returns {JSX.Element} - A new component that conditionally renders the given component or redirects to the sign-in page
 */
const Private = (Component) => {
    const [isLoggedIn] = useContext(AuthContext);

    return isLoggedIn ? Component : <Navigate to="/sign-in"/>;
};

export default Private;