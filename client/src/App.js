// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useEffect, useState} from 'react';
import Home from "./pages/Home";
import {dark, light} from './theme'
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/Footer";
import Solutions from "./pages/Solutions";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Private from "./components/routes/Private";
import isAuthorized from "./helpers/isAuthorized";
import PublicOnly from "./components/routes/PublicOnly";

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    // isAuthorized().then((status) => {
    //     setLoggedIn(status);
    //     console.log('giris');
    // });

    // console.log(isThemeCookieDark())

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        // updateThemeCookie(isDarkTheme);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
                {/*<ThemeProvider theme={createTheme({...theme, palette: { mode: isDarkTheme ? 'dark' : 'light' }})}>*/}
                {/*<ThemeProvider theme={theme}>*/}
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <BrowserRouter>
                    <ResponsiveAppBar
                        isCurrentDarkTheme={isDarkTheme}
                        onToggleTheme={changeTheme}
                    />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/forgot-password' element={<ForgotPassword/>}/>
                        <Route path='/privacy' element={<Privacy/>}/>
                        <Route path='/sign-in' element={PublicOnly(<SignIn/>)}/>
                        <Route path='/sign-up' element={PublicOnly(<SignUp/>)}/>
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path='/solutions' element={<Solutions/>}/>
                        <Route path='/help' element={<Help/>}/>
                        <Route path='/dashboard' element={Private(<Dashboard/>)}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
