import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { getDevices } from '../utilities/api';
import { SaveAlt, Upload } from '@mui/icons-material';
import { CSVLink } from 'react-csv';
import { visuallyHidden } from "@mui/utils";

export default function DeviceLayout() {
  const loadDevice = useLoaderData();
  console.log(loadDevice)

  const handleImport = (e) => {
       const reader = new FileReader();
       reader.readAsBinaryString(e.target.files[0]);
       reader.onload = (e) => {
         const data = e.target.result;
         const workbook = XLSX.read(data, { type: "binary" });
         const sheetsName = workbook.SheetNames[0];
         const sheet = workbook.Sheets[sheetsName];
         const parseData = XLSX.utils.sheet_to_json(sheet);
         // console.log(parseData)
         setRecord2(parseData);
         parseData.forEach((data) => {
           const res = postDevice(data);
         });
       };
     };
 
  return (
   <Box>
    <Stack direction='row' spacing={5}>
      <Link to='/'>Device</Link>
      <Link to='/create_device'>Create Device</Link>
    </Stack>

                    
               
    <Outlet/>
   </Box>
  )
}

export function loader() {
  return getDevices();
}
