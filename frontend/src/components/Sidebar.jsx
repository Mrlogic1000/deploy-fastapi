import * as React from 'react';

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar({children}) {
  const [open, setOpen] = React.useState(true);
  
 

   return (
    <Box marginTop={2} flex={1}  bgcolor={"background.default"}  sx={{  backgroundColor:'grey', height:'100vh', display:'none'} }>

      {children}
    </Box>
    
  );
}
