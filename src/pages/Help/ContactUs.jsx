import Container from "@mui/material/Container";
import RokuTypography from "../../components/ui/RokuTypography";
import * as React from "react";
import {Grid} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import RokuButton from "../../components/ui/RokuButton";

/**
 A React component that represents the contact us page.
 Includes the contact information for the Roku team.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const ContactUs = () => {
    return (
        <Container align="center" sx={{
            mb: 15
        }}>
            <RokuTypography variant="h2" marked="center" sx={{mb: 10}}>
                Contact Us
            </RokuTypography>

            <Grid container spacing={6}>

                {/*2 rows first two on first, second on second*/}
                <Grid item xs={12} sm={6}>
                    <RokuButton href={'mailto:info@example.com'} variant="outlined" startIcon={<EmailIcon/>}>
                        info@example.com
                    </RokuButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <RokuButton href={'tel:+1000000000'} variant="outlined" startIcon={<PhoneIcon/>}>
                        +1 000 000 000
                    </RokuButton>
                </Grid>
                <Grid item xs={12}>
                    <RokuButton href={'https://www.openstreetmap.org/#map=19/35.12613/-106.53700'} variant="outlined"
                                startIcon={<BusinessIcon/>}>
                        308 Negra Arroyo Lane, Albuquerque, New Mexico 87104
                    </RokuButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactUs