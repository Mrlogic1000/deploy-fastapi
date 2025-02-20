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
  Link as MuLink
} from "@mui/material";
import img from "../static/images/avatar/1.jpg"

import { Dashboard, Home, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";




function Header() {
  const [open, setOpen] = useState(false)

  const StyleToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
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
    <AppBar position="sticky">
      <StyleToobar>
        
        <Dashboard sx={{ display: { xs: "block", sm: "none" } }} />       

        <Link to="/">
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Mrlogic
        </Typography>
        </Link>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
        <Avatar
        alt="Remy Sharp"
        src={img}
        sx={{ width: 30, height: 30 }}
        onClick={(e)=>setOpen(true)}
      />
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>          
        <Avatar
        alt="Remy Sharp"
        src={img}
        sx={{ width: 24, height: 24 }}
      />
      <Typography variant="span">Mrlogic</Typography>
        </UserBox>
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
