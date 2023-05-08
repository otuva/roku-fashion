import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from 'react';
import Home from "./pages/Home";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import {dark, light} from './theme'
import {createTheme, ThemeProvider} from "@mui/material";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Solutions from "./pages/Solutions";

const App = () => {
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
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path='/privacy' element={<Privacy/>}/>
                        <Route path='/solutions' element={<Solutions/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
