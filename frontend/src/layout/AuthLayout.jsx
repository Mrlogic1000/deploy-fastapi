import { Box, Drawer, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, Outlet } from "react-router-dom";
import CustomList from "../components/CustomList";
import {
  AdminPanelSettings,
  CameraOutdoor,
  DeviceHub,
  DevicesOther,
  Diversity1,
  Engineering,
  Group,
  Home,
  HomeWork,
  Task,
} from "@mui/icons-material";
import Header from "../components/Header";
import Grid from "@mui/material/Grid2";

function AuthLayout() {
  const [mode, setMode] = useState("light");
  const [active, setActive] = React.useState(false);
 
  const lists = [
    { text: "Nodes", link: "/", icon: <Home /> },
    { text: "Decoders", link: "/decoders", icon: <AdminPanelSettings /> },
    { text: "Services", link: "/services", icon: <DevicesOther /> },
    { text: "Rooms", link: "/rooms", icon: <HomeWork /> },
    { text: "Task", link: "/tasks", icon: <Task /> },
    { text: "Report", link: "/reports", icon: <Engineering /> },
  ];

  return (
    <Box component="div">
      <Header setActive={setActive} active={active} />
      <Grid container>
        <Grid size={2} sx={{display:{xs:'none',md:'block'}}}>
          <CustomList lists={lists} />
         
        </Grid>

        <Grid size={{xs:12,md:10}} marginTop={10}  >
          <Outlet />
        </Grid>
      </Grid>
      <Drawer open={active} onClose={()=>setActive(false)}
          sx={{
            display: { xs: "block", sm: "none" },
            
          }}
          >

         
            <CustomList lists={lists} />
          </Drawer>

      {/* <Stack direction="row" sx={{ height: "100%" }}>
        
        <Box
          // onClick={()=>{if(active) setActive(false)}}
          flex={6}
          sx={{ width: "100%" }}
        >
        
        </Box>
      </Stack> */}
    </Box>
  );
}

export default AuthLayout;
