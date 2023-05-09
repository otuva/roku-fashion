import * as React from 'react';
import Container from '@mui/material/Container';
import RokuTypography from './ui/RokuTypography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Grid, Stack, useTheme} from "@mui/material";
import RokuButton from "./ui/RokuButton";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom'

/**
 * Aesthetic component for the Roku footer. Copyleft
 * @returns {JSX.Element}
 */
const Copyright = () => (
    <RokuTypography variant={'caption'}>
        {'© '}
        Roku
        {' '}
        {new Date().getFullYear()}
    </RokuTypography>
);

/**
 Footer component for the Roku application
 @return {JSX.Element} Returns the JSX for the footer component
 */
const Footer = () => {
    const theme = useTheme()

    return (
        <RokuTypography
            component="footer"
            sx={{
                display: 'flex',
                color: theme.palette.common.white, // conguent with the AppBar
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
                              spacing={2}>

                            {/*social buttons*/}
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
                            {/*copyright*/}
                            <Grid item xs>
                                <Copyright/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*''address'*/}
                    <Grid item xs>
                        <RokuTypography align={"center"} marked={"center"} variant={"h6"}>
                            Address
                        </RokuTypography>
                        <RokuTypography variant="body1" gutterBottom align={"center"}>
                            308 Negra Arroyo Ln. ABQ New Mexico. 87104
                        </RokuTypography>
                    </Grid>
                    {/*legality pages*/}
                    <Grid item xs>
                        <RokuTypography align={"center"} marked={"center"} variant={"h6"}>
                            Legal
                        </RokuTypography>
                        <Stack>
                            <RokuButton component={Link} to={'/terms'} size={'small'} color="secondary" variant={'text'}>Terms</RokuButton>
                            <RokuButton component={Link} to={'/privacy'} size={'small'} color="secondary" variant={'text'}>Privacy</RokuButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </RokuTypography>
    );
}
export default Footer
