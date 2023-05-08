import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Home from "./pages/Home";

function App() {
    return (
        <React.Fragment>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
