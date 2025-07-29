import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
  import {Link} from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const nombreRutas = ["Home", "About", "Config"];
  const rutas = ["/", "/about", "/contact"];
  const iconos = [<AccountCircleIcon />, <InfoIcon />, <SettingsIcon />];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
  {nombreRutas.map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton
        component={Link}
        to={rutas[index]}
        sx={{ color: "white" }}
      >
        <ListItemIcon sx={{ color: "white" }}>
          {iconos[index]}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
    </Box>
  );

  return (
    <div>
      {!open &&
        <Button onClick={toggleDrawer(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300 // asegura que esté por encima de todo
          }}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
      }
      <Drawer open={open} onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#002530',
            color: "white",
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div >
  );
}