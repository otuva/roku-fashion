import * as React from 'react';
import {useContext, useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import RokuTypography from "./ui/RokuTypography";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';
import {ReactComponent as RokuIcon} from "../assets/roku.svg";
import {FormControlLabel, FormGroup, Switch, useTheme} from "@mui/material";
import {DarkMode} from "@mui/icons-material";
import {Link} from "react-router-dom";
import RokuButton from "./ui/RokuButton";
import targetUrlEscape from "../utils/targetUrlEscape";
import {AuthContext} from "../context/AuthContext";

// const pages = ['Solutions', 'Pricing', 'Blog'];
const pages = ['Solutions', 'Help', 'Try-on 3D'];
// const settings = ['Sign Up', 'Sign In', 'Dashboard', 'Logout'];
const settings = ['Sign Up', 'Sign In'];
const userSettings = ['Dashboard', 'Logout'];

/**
 Converts an array item to a menu link for the Roku navbar
 @param {string} page - the name of the page to link to
 @param {Function} handleClose - function to close the menu after selecting an item
 @return {JSX.Element} The JSX element for the menu item
 */
const arrayItemToLink = (page, handleClose) => {
    return (
        <MenuItem key={page}
                  component={Link}
                  onClick={handleClose}
                  to={targetUrlEscape(page)}>
            <RokuTypography textAlign="center">{page}</RokuTypography>
        </MenuItem>
    );
}

/**
 Converts a page name to a button for the Roku navbar
 @param {string} page - the name of the page to link to
 @return {JSX.Element} The JSX element for the button
 */
const pageToButton = (page) => {
    return (
        <RokuButton
            key={page}
            component={Link}
            to={targetUrlEscape(page)}
            sx={{my: 2, color: 'white', display: 'block'}}
        >
            {page}
        </RokuButton>
    );
}

/**
 Navbar component for the Roku application
 It is responsive and will display a hamburger menu on smaller screens
 @param {boolean} isCurrentDarkTheme - variable supplied by app for the current theme
 @param {Function} onToggleTheme - function supplied by app to toggle the theme
 @return {JSX.Element} Returns the JSX for the navbar component
 */
const ResponsiveAppBar = ({isCurrentDarkTheme, onToggleTheme}) => {
// const ResponsiveAppBar = () => {
    const [isLoggedIn] = useContext(AuthContext);
    const theme = useTheme()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    // navigation menu open/close handlers
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // user menu open/close handlers
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // navigation menu open/close handlers
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // user menu open/close handlers
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        // <AppBar position="sticky" sx={{background: theme.palette.rokuGradient}}>
        // sx={{background: theme.palette.primary.main}}
        <AppBar position="sticky" sx={{background: theme.palette.primary.main}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SvgIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
                        <RokuIcon/>
                    </SvgIcon>

                    {/*logo for the app*/}
                    <RokuTypography
                        variant="h6"
                        noWrap
                        component={Link}
                        to={'/'}
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ROKU
                    </RokuTypography>

                    {/*menu for the navigation pages. in small screens. will be kebab */}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {/*small screens kebab menu*/}
                            {pages.map(page => arrayItemToLink(page, handleCloseNavMenu))}
                        </Menu>
                    </Box>


                    {/*logo for the small screens. makes icon and logo centered*/}
                    <SvgIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}>
                        <RokuIcon/>
                    </SvgIcon>
                    <RokuTypography
                        variant="h5"
                        noWrap
                        component={Link}
                        to={'/'}
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ROKU
                    </RokuTypography>

                    {/*pages for navigation*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(pageToButton)}
                    </Box>

                    {/*user settings menu*/}
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*user settings menu*/}
                            {isLoggedIn ? userSettings.map(setting => arrayItemToLink(setting, handleCloseUserMenu)) : settings.map(setting => arrayItemToLink(setting, handleCloseUserMenu))}

                            <MenuItem>
                                <FormGroup>
                                    <FormControlLabel
                                        label={<DarkMode sx={{display: 'block'}}/>}
                                        // control={<Switch checked={isDarkTheme} onChange={toggleTheme}/>}
                                        control={<Switch checked={isCurrentDarkTheme} onChange={onToggleTheme}/>}
                                        // control={<Switch/>}
                                    />
                                </FormGroup>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
