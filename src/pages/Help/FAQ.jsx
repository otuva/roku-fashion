import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from "@mui/material/Container";
import RokuTypography from '../../components/ui/RokuTypography';

const qa = [
    {
        id: "panel1",
        heading: "What is bespoke fashion?",
        details: "Bespoke fashion refers to custom-made clothing that is tailored to fit an individual's specific measurements and preferences. Unlike ready-to-wear clothing, which is mass-produced and available in standard sizes, bespoke clothing is designed and constructed to the customer's unique specifications."
    },
    {
        id: "panel2",
        heading: "What is the difference between bespoke and ready-to-wear clothing?",
        details: " The main difference between bespoke and ready-to-wear clothing is that bespoke clothing is made to measure for the individual customer, while ready-to-wear clothing is produced in standard sizes and may require alterations to fit properly. Bespoke clothing is typically of higher quality and made with more attention to detail than ready-to-wear clothing."
    },
    {
        id: "panel3",
        heading: "How does the bespoke process work?",
        details: "The bespoke process typically involves an initial consultation with a tailor to discuss the customer's measurements, style preferences, and other details. The tailor then creates a pattern based on the customer's specifications and creates a prototype garment for fitting. The garment is then adjusted and refined until the desired fit and style is achieved."
    },
    {
        id: "panel4",
        heading: "What fabrics do you offer for bespoke clothing?",
        details: "We offer a wide range of high-quality fabrics for bespoke clothing, including wool, cotton, silk, and linen, as well as blends and specialty fabrics for specific purposes such as outdoor wear."
    }
];

/**
 A React component that represents the FAQ page.
 Uses the MUI Accordion component to display the FAQ.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{
            mt: 10,
            mb: 15
        }}>
            <RokuTypography align="center" variant="h2" marked="center" sx={{mb: 12}}>
                Frequently Asked Questions
            </RokuTypography>

            {qa.map(accordion => {
                const {id, heading, details} = accordion;
                return (
                    <Accordion
                        expanded={expanded === id}
                        key={id}
                        onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <RokuTypography className={heading}>{heading}</RokuTypography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <RokuTypography>{details}</RokuTypography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Container>
    );
};
export default FAQ