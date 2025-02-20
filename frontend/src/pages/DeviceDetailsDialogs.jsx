import React, { useState } from "react";
import CustomDialog from "../components/CustomDialog";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getDevice } from "../utilities/api";
import router from "../static/images/switch.jpg";
import RowComp from "../components/RowComp";

export default function DeviceDetails() {
  const [open, setOpen] = useState(true); 
  const device = useLoaderData();
  const navigate = useNavigate()

  function close(){
    setOpen(false)
    navigate('/')

  }
  // console.log(device)
  return (
    <Box>
      <Typography variant="h5"></Typography>
      <Divider />

      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Device Details</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Stack direction='row' spacing={2}>
           <Stack justifyContent="space-between" spacing={2}>                            
                <RowComp text="Identity" value={device.name} />
                <RowComp text="IP Address" value={device.ip} />
                <RowComp text="MAC Address" value={device.mac} />
                <RowComp text="Model" value={device.model} />
             
            </Stack>
            <Stack justifyContent="space-between" spacing={2}>                            
                <RowComp text="Type" value={device.type} />
                <RowComp text="Status" value={device.status} />
                <RowComp text="Connected" value={device.install} />
                <RowComp text="Serial" value={device.serial_no} />
             
            </Stack>
           </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export function loader({ params }) {
  const { id } = params;
  return getDevice(id);
}
