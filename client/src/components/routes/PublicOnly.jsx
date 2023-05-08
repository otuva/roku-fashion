import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

/**
 A Higher-Order Component (HOC) that conditionally renders a given component if the user is not authenticated, otherwise redirects to the home page.
 @param {React.ComponentType} Component - The component to render if the user is not authenticated
 @returns {React.ComponentType} - A new component that conditionally renders the given component or redirects to the home page
 */
const PublicOnly = (Component) => {
    const [isLoggedIn] = useContext(AuthContext);

    return !isLoggedIn ? Component : <Navigate to="/"/>;
};

export default PublicOnly;