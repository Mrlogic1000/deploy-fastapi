import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {Container, Stack, Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Header from "../components/Header";
import Add from "../components/Add";
import { AdminPanelSettings, Group, Home } from "@mui/icons-material";
import CustomList from "../components/CustomList";
import HeadContainer from "../components/HeadContainer";


function HomeLayout() {
  const [mode, setMode] = useState("light")
  const DarkTheme = createTheme({
    palette:{
      mode: mode
    }
  })

  const lists = [
    {text:"Home Page", link:"/", icon:<Home/> },
    {text:"Admin", link:"/admin", icon:<AdminPanelSettings/> },
    {text:"Team", link:"/team", icon:<Group/> },


]
  


  const [count, setCount] = useState(0)
  return (
    <ThemeProvider theme={DarkTheme}>
    
    
    
      <Box>
        
        <Stack direction="row" spacing={2}> 
        <CustomList lists = {lists} />
         <Box flex={4} p={2}>         
          <Outlet/>
         </Box>
         <Rightbar/>
         
        </Stack>

        <Add />
        
      </Box>
      </ThemeProvider>
  );
}

export default HomeLayout;
