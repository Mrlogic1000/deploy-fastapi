import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  AccountBox,
  AdminPanelSettings,
  CameraOutdoor,
  DeviceHubSharp,
  Group,
  Home,
  ModeNight,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export default function CustomList({ lists }) {
  const [event, setEvent] = useState(false)
  
    const data = lists.map((list, index) => (
        <ListItem key={index} disablePadding sx={{textDecoration:"none", color:"inherit"}} component={Link} to={list.link}>
          <ListItemButton
           onMouseEnter={()=>setEvent(true)}
           onMouseLeave={()=>setEvent(false)}
           style={{}}
          >
            <ListItemIcon 
           
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.text}  />
          </ListItemButton>
        </ListItem>
      ))
  return (
   
      <Box marginTop={10} borderLeft={3}>
        <List>
          {data}
        </List>
      </Box>
   
  );
}
