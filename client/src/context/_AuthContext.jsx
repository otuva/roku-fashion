import React, { createContext, useState } from 'react';

// Create a new context for the authentication state
export const AuthContext = createContext();

// Create an AuthContextProvider component to wrap your app and provide the context
export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize the isLoggedIn state to false

    // Define a function to toggle the isLoggedIn state
    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    // Define the value object to provide to child components via the context
    const value = {
        isLoggedIn,
        toggleLogin
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
