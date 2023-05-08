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