import {SvgIcon} from "@mui/material";
import RokuTypography from "./RokuTypography";
import Box from "@mui/material/Box";
import * as React from "react";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

/**
 React component that renders an SVG icon along with a title and content text.
 @param {Object} props - The props object that contains the following properties:
 @param {React.ReactNode} props.svg - The SVG icon to render.
 @param {string} props.title - The title to display.
 @param {string} props.content - The content text to display.
 @returns {JSX.Element} - The rendered component.
 */
export const SvgContent = ({svg, title, content}) => {
    return (
        <Box sx={item}>
            <SvgIcon sx={{fontSize: 81}}>
                {svg}
            </SvgIcon>
            <RokuTypography variant="h6" sx={{my: 5}}>
                {title}
            </RokuTypography>
            <RokuTypography variant="h5">
                {content}
            </RokuTypography>
        </Box>
    )
}