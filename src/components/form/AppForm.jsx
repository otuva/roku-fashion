import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

/**
 React component for a form container that renders child components
 @param {object} props - The props object for the component
 @param {React.ReactNode} props.children - The child components to be rendered inside the form container
 @returns {JSX.Element} - The JSX element representing the form container component
 */
const AppForm = props => {
    const {children} = props;

    return (
        <Container maxWidth="sm">
            {/*<Box sx={{mt: 7, mb: 12, py: {xs: 4, md: 8}, px: {xs: 3, md: 6}}}>*/}
            <Box sx={{mt: 7, mb: 12}}>
                {/*<Paper*/}
                {/*    background="dark"*/}
                {/*    sx={{py: {xs: 4, md: 8}, px: {xs: 3, md: 6}}}*/}
                {/*>*/}
                {/*    */}
                {/*</Paper>*/}

                {children}
            </Box>
        </Container>
    );
};

AppForm.propTypes = {
    children: PropTypes.node,
};

export default AppForm;
