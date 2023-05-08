import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from 'react';
import Home from "./pages/Home";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import {dark, light} from './theme'
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        // updateThemeCookie(isDarkTheme);
    };

    const changeLoggedIn = () => {
        setLoggedIn(!loggedIn);
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <BrowserRouter>
                    <ResponsiveAppBar
                        isCurrentDarkTheme={isDarkTheme}
                        onToggleTheme={changeTheme}
                        isCurrentUserLoggedIn={loggedIn}
                        onToggleLoggedIn={changeLoggedIn}
                    />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
