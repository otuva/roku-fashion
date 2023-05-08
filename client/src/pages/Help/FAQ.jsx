import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from "@mui/material/Container";
import RokuTypography from '../../components/ui/RokuTypography';

const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{
            mt: 10,
            mb: 15
        }}>
            <RokuTypography align="center" variant="h2" marked="center" sx={{mb: 5}}>
                Frequently Asked Questions
            </RokuTypography>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <RokuTypography sx={{width: '33%', flexShrink: 0}}>
                        General settings
                    </RokuTypography>
                    <RokuTypography sx={{color: 'text.secondary'}}>I am an accordion</RokuTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <RokuTypography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </RokuTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <RokuTypography sx={{width: '33%', flexShrink: 0}}>Users</RokuTypography>
                    <RokuTypography sx={{color: 'text.secondary'}}>
                        You are currently not an owner
                    </RokuTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <RokuTypography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </RokuTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <RokuTypography sx={{width: '33%', flexShrink: 0}}>
                        Advanced settings
                    </RokuTypography>
                    <RokuTypography sx={{color: 'text.secondary'}}>
                        Filtering has been entirely disabled for whole web server
                    </RokuTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <RokuTypography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </RokuTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <RokuTypography sx={{width: '33%', flexShrink: 0}}>Personal data</RokuTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <RokuTypography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </RokuTypography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};
export default FAQ