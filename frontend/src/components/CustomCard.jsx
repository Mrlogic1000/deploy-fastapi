import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

export default function CustomCard({title,children}) {
  return (
    <Box sx={{ bgcolor: "background.paper", marginBottom:'5px' }} variant="outlined">
      <Typography
       variant="h6"
        sx={{ backgroundColor: "gray", color: "white" , padding:'5px'}}
      >
        {title}
        </Typography>
      
       <Box>
       {children}
       </Box>
      
    </Box>
  );
}
