import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useEffect, useState} from 'react';
import Home from "./pages/Home/Home";
import {dark, light} from './theme'
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Footer from "./components/Footer";
import Solutions from "./pages/Solutions/Solutions";
import Help from "./pages/Help/Help";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Private from "./components/routes/Private";
import PublicOnly from "./components/routes/PublicOnly";
import Logout from "./pages/Logout/Logout";
import TryOn3D from "./pages/TryOn3D/TryOn3D";
import isThemeCookieDark from "./helpers/isThemeCookieDark";
import updateThemeCookie from "./helpers/updateThemeCookie";

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        updateThemeCookie(!isDarkTheme);
        // console.log("cookie degisti")
    };

    // read them cookie after render
    useEffect(() => {
        (() => {
            // console.log("cookie okudu")
            setIsDarkTheme(isThemeCookieDark());
        })();
    }, []);

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
                        {/*all routes resides here.
                        to protect (require login) an endpoint simply wrap component in Private() function
                        PublicOnly function is used to avoid weird things like if user accesses sign in page while logged in*/}
                        <Route path='/' element={<Home/>}/>
                        <Route path='/forgot-password' element={<ForgotPassword/>}/>
                        <Route path='/privacy' element={<Privacy/>}/>
                        <Route path='/sign-in' element={PublicOnly(<SignIn/>)}/>
                        <Route path='/sign-up' element={PublicOnly(<SignUp/>)}/>
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path='/solutions' element={<Solutions/>}/>
                        <Route path='/help' element={<Help/>}/>
                        <Route path='/dashboard' element={Private(<Dashboard/>)}/>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='/try-on-3d' element={<TryOn3D/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
