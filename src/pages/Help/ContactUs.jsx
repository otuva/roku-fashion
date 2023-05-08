import Container from "@mui/material/Container";
import Typography from "../../components/ui/Typography";
import * as React from "react";
import {Grid} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import Button from "../../components/ui/Button";

const ContactUs = () => {
    return (
        <Container align="center" sx={{
            mb: 15
        }}>
            <Typography variant="h2" marked="center" sx={{mb: 10}}>
                Contact Us
            </Typography>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <Button href={'mailto:info@example.com'} variant="outlined" startIcon={<EmailIcon/>}>
                        info@example.com
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button href={'tel:+1000000000'} variant="outlined" startIcon={<PhoneIcon/>}>
                        +1 000 000 000
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button href={'https://www.openstreetmap.org/#map=19/35.12613/-106.53700'} variant="outlined"
                            startIcon={<BusinessIcon/>}>
                        308 Negra Arroyo Lane, Albuquerque, New Mexico 87104
                    </Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default ContactUs