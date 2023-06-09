import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import RokuButton from '../../components/ui/RokuButton';
import RokuTypography from '../../components/ui/RokuTypography';
import {Link} from "react-router-dom";
import {ReactComponent as Crossroad} from '../../assets/crossroad.svg';
import {ReactComponent as MagicTrick} from '../../assets/magic-trick.svg';
import {ReactComponent as AmpleDress} from '../../assets/ample-dress.svg';
import {SvgContent} from "../../components/ui/SvgContent";

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'primary.main',
    fontWeight: 'medium',
};

/**
 A React component that informs the user how the process works.
 Uses SvgContent to display the icons.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const HowItWorks = () => (
    <Box
        component="section"
        sx={{display: 'flex', overflow: 'hidden'}}
    >
        <Container
            sx={{
                mt: 10,
                mb: 15,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <RokuTypography align="center" variant="h2" marked="center" sx={{mb: 10}}>
                How it works
            </RokuTypography>
            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={number}>1.</Box>
                        <SvgContent svg={<Crossroad/>}
                                    title={'You decide'}
                                    content={'You are in full control. You can decide your clothing tailored to your measurements and preferences, ' +
                                        'from the choice of fabrics and colors to the design details and finishing touches.'}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={number}>2.</Box>
                        <SvgContent svg={<MagicTrick/>}
                                    title={'We perform our magic'}
                                    content={'A designer will be assigned to you. In this process, you can revise a pre-defined number of times.' +
                                        'With expert guidance from skilled tailors and designers, you can achieve a look that is truly you.'}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={number}>3.</Box>
                        <SvgContent svg={<AmpleDress/>}
                                    title={'Your imaginations will be reality'}
                                    content={'Your imaginations will be reality with Roku, as skilled artisans and designers work with you to turn your vision ' +
                                        'into a one-of-a-kind garment that is tailored specifically to your body and style.'}/>
                    </Grid>
                </Grid>
            </Box>
            <RokuButton
                component={Link}
                variant="contained"
                size="large"
                to={'/sign-up'}
                sx={{minWidth: 200, mt: 8}}
            >
                Join now
            </RokuButton>
        </Container>
    </Box>
);

export default HowItWorks;
