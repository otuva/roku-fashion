import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StartIcon from '@mui/icons-material/Start';
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon/>,
        active: true,
      },
      {id: 'Database', icon: <DnsRoundedIcon/>},
      {id: 'Storage', icon: <PermMediaOutlinedIcon/>},
      {id: 'Hosting', icon: <PublicIcon/>},
      {id: 'Functions', icon: <SettingsEthernetIcon/>},
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon/>,
      },
    ],
  },
  {
    id: 'Quality',
    children: [
      {id: 'Analytics', icon: <SettingsIcon/>},
      {id: 'Performance', icon: <TimerIcon/>},
      {id: 'Test Lab', icon: <PhonelinkSetupIcon/>},
    ],
  },
];

/**
 A React component that represents the temporary drawer for the dashboard page.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const TemporaryDrawer = () => {
  const [state, setState] = React.useState(false);

  // The anchor of the drawer. This determines how the drawer will be displayed.
  const anchor = "left";

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
      <Box
          sx={{width: 250}}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
      >
        <List>
          {categories.map(({id, children}) => (
              <Box key={id}>
                <ListItem sx={{py: 2, px: 3}}>
                  <ListItemText>{id}</ListItemText>
                </ListItem>
                {children.map(({id: childId, icon, active}) => (
                    <ListItem disablePadding key={childId}>
                      <ListItemButton selected={active}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText>{childId}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                ))}
                <Divider sx={{mt: 2}}/>
              </Box>
          ))}
        </List>
      </Box>
  );

  return (
      <React.Fragment>
        <Drawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(false)}
        >
          {list(anchor)}
        </Drawer>

        <IconButton onClick={toggleDrawer(true)} color="secondary"
                    sx={{position: 'fixed', left: '0.1em', top: '50%'}}>
          <StartIcon sx={{ fontSize: '1.1em' }}/>
        </IconButton>

      </React.Fragment>
  );
}

export default TemporaryDrawer;