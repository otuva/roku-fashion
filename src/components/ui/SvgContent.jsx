import {SvgIcon} from "@mui/material";
import Typography from "./Typography";
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
			<Typography variant="h6" sx={{my: 5}}>
                {title}
			</Typography>
			<Typography variant="h5">
                {content}
			</Typography>
		</Box>
	)
}