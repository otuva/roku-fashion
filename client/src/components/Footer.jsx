import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from './ui/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Box, Grid, Stack, useTheme} from "@mui/material";
import Button from "./ui/Button";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom'

const Copyright = () => (
    <React.Fragment>
        {'© '}
        Roku
        {' '}
        {new Date().getFullYear()}
    </React.Fragment>
);

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'secondary.main',
    mr: 1,
    '&:hover': {
        bgcolor: 'secondary.dark',
    },
};

const Footer = () => {
    const theme = useTheme()

    return (
        <Typography
            component="footer"
            sx={{
                display: 'flex',
                color: theme.palette.common.white,
                bgcolor: theme.palette.primary.main
            }}
        >
            <Container sx={{my: 2, display: 'flex'}}>
                <Grid container spacing={2}>
                    {/*'copyright' and social icons*/}
                    <Grid item xs>
                        <Grid container
                              direction="column"
                              justifyContent="flex-end"
                              spacing={2}
                              sx={{height: 120}}>
                            <Grid item xs>
                                <IconButton color="secondary" aria-label="FacebookIcon">
                                    <FacebookIcon/>
                                </IconButton>
                                <IconButton color="secondary" aria-label="TwitterIcon">
                                    <TwitterIcon/>
                                </IconButton>
                                <IconButton color="secondary" aria-label="InstagramIcon">
                                    <InstagramIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <Copyright/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography align={"center"} marked={"center"} variant={"h6"} my={0.5}>
                            Address
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            308 Negra Arroyo Ln. ABQ New Mexico. 87104
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography align={"center"} marked={"center"} variant={"h6"}>
                            Legal
                        </Typography>
                        <Stack>
                            <Button component={Link} to={'/terms'} size={'small'} color="secondary" variant={'text'}>Terms</Button>
                            <Button component={Link} to={'/privacy'} size={'small'} color="secondary" variant={'text'}>Privacy</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}
export default Footer
