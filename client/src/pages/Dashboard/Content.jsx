import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import RokuTypography from '../../components/ui/RokuTypography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RokuButton from '../../components/ui/RokuButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Container from "@mui/material/Container";

/**
 A React component that represents the content of the admin dashboard page.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Content = () => (
    <Container sx={{my: 12, mb: 36}}>
        <RokuTypography align="center" variant="h2" marked="center" sx={{mb: 24}}>
            Admin Dashboard
        </RokuTypography>

        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{display: 'block'}}/>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by email address, phone number, or user UID"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {fontSize: 'default'},
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <RokuButton variant="contained" sx={{mr: 1}}>
                                Add user
                            </RokuButton>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{display: 'block'}}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <RokuTypography sx={{my: 5, mx: 2}} color="text.secondary" align="center">
                No users for this project yet
            </RokuTypography>
        </Paper>
    </Container>
);
export default Content
