import React, {createContext, useEffect, useState} from 'react';
import isAuthorized from "../helpers/isAuthorized";

// Create a new context for the authentication state
export const AuthContext = createContext();


/**
 * AuthContextProvider component to wrap your app and provide the context.
 * Holds the isLoggedIn state and provides a function to toggle it.
 * Will use hooks to check if the user is logged in or not.
 * @param {Object} children - Child components to render within the AuthContextProvider
 * @return {Object} - Returns the AuthContextProvider component
 */
export const AuthContextProvider = ({ children }) => {
    // Create an AuthContextProvider component to wrap your app and provide the context
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize the isLoggedIn state to false

    // Define a function to toggle the isLoggedIn state

    // Define the value object to provide to child components via the context
    const value = [isLoggedIn, setIsLoggedIn]

    // this hook will check if the token is valid or not
    useEffect(() => {
        (async () => {
            // console.log("ProtectedRoute girdi");

            const sessionStatus = await isAuthorized();

            setIsLoggedIn(sessionStatus);
        })();
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
