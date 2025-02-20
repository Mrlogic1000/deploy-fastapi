import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { getDevice } from "../utilities/api";
import RowComp from "../components/RowComp";
import CustomCard from "../components/CustomCard";
import CustomizedTable from "../components/CustomizedTable";
import { ArrowBack } from "@mui/icons-material";
import CustomDialog from "../components/CustomDialog";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import FormikForm from "../components/FormikForm";
import Grid from "@mui/material/Grid2";
export default function DeviceDetail() {
  const [value, setValue] = React.useState(0);
  const [networkDia, setNetworkDia]  = useState(false)
  const [portDia, setPortDia]  = useState(false)

  const openNetworkDia =()=>{
    setNetworkDia(true)
  }
  const openPortDia =()=>{
    setPortDia(true)
  }
 
  const closeNetworkDig =()=>{
    setNetworkDia(false)
    // setInputs(null)
  }
  const closePortDia =()=>{
    setNetworkDia(false)
    // setInputs(null)
  }
  const networkInput = [
    {name:'name',label:'Name'},
    {name:'type',label:'Type'},
    {name:'neigbor',label:'Neigbor'},
    {name:'comment',label:'Comment'},
  ]
  const columns = [
    { id: 'vlan', label: 'Vlan', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 100 },
    {
      id: 'ip',
      label: 'IP',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    
    
  ];
  const portColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'neigbor', label: 'Neigbor', minWidth: 100 },
    {
      id: 'comment',
      label: 'Comment',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const device = useLoaderData();
  console.log(device);
  const navigate = useNavigate();
  return (
    <Box component='div' >
    
     <Stack direction='row' alignItems='center' alignContent='center' justifyContent='space-between' marginBottom={2}>
       <Link to='/'> <IconButton><ArrowBack/></IconButton></Link>
       
       
       <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
         <Button onClick={()=>{openPortDia}} variant="outlined">Add Port</Button>
         <Button onClick={()=>{openNetworkDia}} variant="outlined">Add Network</Button>

       </Stack>
       </Stack>
      <Grid container spacing={1}  sx={{padding:'2px'}}  >
        {/* <Grid size={{xs:12,md:8}} >
          <CustomCard title="Network">
          <CustomizedTable columns={columns} rows={device.networks}/>
          </CustomCard>
       
          
          <CustomCard title="Port">
          <CustomizedTable columns={portColumns} rows={device.ports}/>
          </CustomCard>
        </Grid> */}
        <Grid size={{xs:12,md:4}} >
          <Stack spacing={4} >
          <CustomCard title="Details">
            <RowComp text="Identity" value={device.name} />
            <RowComp text="MAC Address" value={device.mac} />
            <RowComp text="Model" value={device.model} />
            <RowComp text="Serial" value={device.serial_no} />
          </CustomCard>

          <CustomCard title="Status">
            <RowComp text="Type" value={device.type} />
            <RowComp text="Status" value={device.status} />
            <RowComp text="Connected" value={device.install} />
            <RowComp text="Location" value={device.location} />
          </CustomCard>
          </Stack>
        </Grid>
      </Grid>
      <CustomDialog open={networkDia} close={closeNetworkDig} title='Network'>
        <Stack>
        <FormikForm 
        closeDia={closeNetworkDig}
        inputs={networkInput} 
        />
        
       
        </Stack>
      </CustomDialog>
      <CustomDialog open={portDia} close={closePortDia} title='Port'>
        <Stack>
        <FormikForm 
        closeDia={closePortDia}
        inputs={networkInput} 
        />
        
       
        </Stack>
      </CustomDialog>
    </Box>
  );
}

export function loader({ params }) {
  const { id } = params;
  return getDevice(id);
}
