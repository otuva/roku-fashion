import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {ReactComponent as Scissors} from '../../assets/scissors.svg';
import {ReactComponent as SewingNeedle} from '../../assets/sewing-needle.svg';
import {ReactComponent as MeasureTape} from '../../assets/measure-tape.svg';
import {SvgContent} from "../../components/ui/SvgContent";

const IconText = () => (
    <Box
        component="section"
        sx={{display: 'flex', overflow: 'hidden'}}
    >
        <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <SvgContent svg={<MeasureTape/>}
                                title={'Our team is here'}
                                content={'Whether you have a specific design in mind or need some guidance in ' +
                                    'creating your perfect outfit, our team is here to help.'}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SvgContent svg={<Scissors/>}
                                title={'Finest materials'}
                                content={'We use only the finest materials and fabrics to create our custom outfits, ' +
                                    'ensuring that they are not only beautiful but also durable and long-lasting.'}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SvgContent svg={<SewingNeedle/>}
                                title={'Your perfect outfit'}
                                content={'Whether you are looking for a formal suit, a stunning dress, ' +
                                    'or a casual outfit, we can help you design and craft your perfect outfit'}
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default IconText;
