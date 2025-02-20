import React, { useState } from "react";
import { getDevice, getDevices, getRoom, getrooms, postDevice } from "../utilities/api";
import { Outlet, redirect, useLoaderData, useNavigation, useParams } from "react-router-dom";
import Table from "../components/CustomizedTable";
import CustomizedTable from "../components/CustomizedTable";
import Datatable from "../components/DataTable";
import { Box, Button, IconButton, Modal, Paper, Stack, styled, TextField, Typography } from "@mui/material";
import CustomModal from "../components/CustomModal";
import CustomDialog from "../components/CustomDialog";
import VarticalForm from "../components/VarticalForm";
import EditForm from "../components/Edit";
import MyFormikForm from "../components/MyFormikForm";
import MultiSTepForm from "../components/MultiSTepForm";
import { Save, SaveAlt, Upload } from "@mui/icons-material";
import { CSVLink } from "react-csv";
import { visuallyHidden } from "@mui/utils";
import { roomColumn } from "../utilities/tablecolumns";
import CollapsibleTable from "../components/CollapsibleTable";



export default function Rooms() {
  const loadRooms = useLoaderData();
  
 

  const [open, setOpen]  = useState(false)
  const [open2, setOpen2]  = useState(false)
  const [edit, setEdit] = useState(null)
  const [inputs, setInputs] = useState( {
    id:'',
    name:'',
    serial_no:'',
    location:'',
    mac:'',
    type:'',
    install:'',
    status:'',
    description:''

  })
  const navigation = useNavigation()
  const handleOpen =(e)=>{
    setOpen(true)
  }
  const handleOpen2 =(e)=>{
    setOpen2(true)
  }
  const handleClose =(e)=>{
    setOpen(false)
    // setInputs(null)
  }
  const handleClose2 =(e)=>{
    setOpen2(false)
    // setInputs(null)
  }
   const editDevice = async (params)=>{
    const res = await getDevice(params)
    if(res){
      setInputs(values=>({...res}))    
      setOpen2(true)
    }
  }
 
  return (
    <Stack sx={{MaxHeight:'100%'}}>
      {/* <CustomizedTable rows={loadDevice}/> */}

     
      <CustomDialog title="New Device" open={open} close={handleClose}>
        <MultiSTepForm/>
      </CustomDialog>
      <CustomDialog title="Edit" open={open2} close={handleClose}>
        <EditForm inputs={inputs} open={handleOpen2} close={handleClose2} setInputs={setInputs}/>
      </CustomDialog>
      <Datatable column={roomColumn} datas={loadRooms} open = {handleOpen} func = {editDevice}/>

      
      {/* <CollapsibleTable rows={loadRooms}/> */}
      


     
     
    </Stack>
  );
}

export function loader() {
  return getrooms();
}

export async function action({request}){
  const formData = await request.formData();
  const device = {
    name: formData.get('name'),
    ip: formData.get('ip'),
    mac: formData.get('mac'),
    type: formData.get('type'),
    install: formData.get('install'),
    serial_no: formData.get('serial_no'),
    model: formData.get('model'),
    status: formData.get('status')
  }
  // console.log(device)
 
  postDevice(device)
  
  return redirect('/')

}

