import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
  Link as MuLink,
  IconButton,
  makeStyles
} from "@mui/material";
import img from "../static/images/avatar/1.jpg"

import { Dashboard, Home, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";


// const useStyles = makeStyles((theme)=>({
//   search:{
//     backgroundColor: "white",
//     padding: "0 10px",
//     borderRadius: theme.shape.borderRadius,
//     width: "40%",

//   }
// }))

function Header({setActive,active}) {
  // const classes = useStyles()
 
  const [open, setOpen] = useState(false)

  const StyleToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between", 
    
  });

 
  const styleBar = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
   
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
   
  }));
  return (
    <AppBar position="fixed" >
      <StyleToobar direction='row'  alignItems='center' >
        
        <IconButton onClick={()=>{setActive(!active)}}>
          
        <Dashboard sx={{ display: { xs: "block", sm: "none" }, fontSize:'35px' }} /> 
          </IconButton>      

        
        
       
       
      </StyleToobar>


      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Header;
