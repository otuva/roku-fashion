import * as React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import {Button} from "@mui/material";
import RokuTypography from '../../components/ui/RokuTypography';

const backgroundImage =
    'https://unsplash.com/photos/xXJ6utyoSw0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwZGVzaWduZXJ8ZW58MHx8fHwxNjgzMjg2OTgx&force=true&w=2400';

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

const IntroRoot = styled('section')(({theme}) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '90vh',
        minHeight: 500,
        maxHeight: 1300,
    }
}));

const Intro = () => (
    <IntroRoot>
        <Container sx={{
            mt: 3,
            mb: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{display: 'none'}}
                src={backgroundImage}
                alt="increase priority"
            />
            <RokuTypography align="center" variant="h2" marked="center">
                Tailored just for you...
            </RokuTypography>
            <RokuTypography
                align="center"
                variant="h5"
                sx={{mb: 4, mt: {xs: 4, sm: 10}}}
            >
                Skilled team of designers and craftsmen work closely with you
                to create a garment that fits perfectly and reflects your individuality
            </RokuTypography>
            <Button
                // component={Link}
                variant="contained"
                size="large"
                to={'/sign-up'}
                sx={{minWidth: 200}}
            >
                Join Now
            </Button>
            <RokuTypography variant="body2" sx={{mt: 2}}>
                Invite only
            </RokuTypography>

            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: 'common.black',
                    opacity: 0.5,
                    zIndex: -1,
                }}
            />

            <Background sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
            }}/>

            <ArrowDownward sx={{position: 'absolute', bottom: 32}}/>
        </Container>
    </IntroRoot>
);
export default Intro
