import React, {createContext, useEffect, useState} from 'react';
import isAuthorized from "../helpers/isAuthorized";

// Create a new context for the authentication state
export const AuthContext = createContext();

// Create an AuthContextProvider component to wrap your app and provide the context
export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize the isLoggedIn state to false

    // Define a function to toggle the isLoggedIn state

    // Define the value object to provide to child components via the context
    const value = [isLoggedIn, setIsLoggedIn]

    useEffect(() => {
        (async () => {
            console.log("ProtectedRoute girdi");

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
