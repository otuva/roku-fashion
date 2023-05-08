import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../../components/ui/Typography';
import SupportIcon from '@mui/icons-material/Support';
import {SvgIcon} from "@mui/material";
import {Link} from "react-router-dom";

const GetHelp = () => (
    <Container
        component="section"
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 7}}
    >
        <Button
            variant="outlined"
            size={'large'}
            to={'/help'}
            component={Link}
        >Need help?</Button>

        <Typography variant="subtitle1" sx={{my: 3}}>
            We are here to help. Get in touch!
        </Typography>
        <SvgIcon sx={{fontSize: 81}}>
            <SupportIcon/>
        </SvgIcon>
    </Container>
);

export default GetHelp;
