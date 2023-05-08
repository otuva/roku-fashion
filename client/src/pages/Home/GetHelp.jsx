import * as React from 'react';
import RokuButton from '../../components/ui/RokuButton';
import Container from '@mui/material/Container';
import RokuTypography from '../../components/ui/RokuTypography';
import SupportIcon from '@mui/icons-material/Support';
import {SvgIcon} from "@mui/material";
import {Link} from "react-router-dom";

const GetHelp = () => (
    <Container
        component="section"
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 7}}
    >
        <RokuButton
            variant="outlined"
            size={'large'}
            to={'/help'}
            component={Link}
        >Need help?</RokuButton>

        <RokuTypography variant="subtitle1" sx={{my: 3}}>
            We are here to help. Get in touch!
        </RokuTypography>
        <SvgIcon sx={{fontSize: 81}}>
            <SupportIcon/>
        </SvgIcon>
    </Container>
);

export default GetHelp;
