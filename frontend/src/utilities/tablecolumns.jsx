import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Button, Chip, IconButton, Modal, Paper, Stack, styled, TextField, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export const deviceColumn2 = [
    {
      name: "Identity",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "MAC",
      selector: (row) => row.mac,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Connect",
      selector: (row) => (
        <Chip
          label={row.install.toLocaleUpperCase()}
          
          size="small"
        />
      ),
    },
    {
      name: "Serial Number",
      selector: (row) => row.serial_no,
    },
    {
      name: "Model",
      selector: (row) => row.model,
    },
    {
      name: "Status",
      selector: (row) => (
        <Chip
          label={row.status.toLocaleUpperCase()}
          color={row.status === "good" ? "primary" : "grey"}
          size="small"
        />
      ),
    },

    {
      name: "Action",
      cell: (row) => (
        <Stack direction="row">
          <IconButton
            color="error"
            onClick={() => alertAction(row.id)}
            aria-label="delete"
          >
            <Delete />
          </IconButton>

          <IconButton
            color="primary"
            aria-label="add"
            onClick={() => func(row.id)}
          >
            <Edit />
          </IconButton>
          <IconButton color="primary" aria-label="add">
            <Link to={`device/${row.id}`}>
              <Visibility />
            </Link>
          </IconButton>
        </Stack>
      ),
    },
  ];
export const deviceColumn = [
    {
      name: "Identity",
     
    },
    {
      name: "Location",
     
    },
    {
      name: "MAC",
    
    },
    {
      name: "Type",
      
    },
    {
      name: "Connect",
    
    },
    {
      name: "Serial Number",
    
    },
    {
      name: "Model",
    
    },
    {
      name: "Status",
     
    },

    {
      name: "Action",
      
    },
  ];
export const roomColumn = [
    {
      name: "Rooms",
      selector: (row) => row.room_nubmer,
      sortable: true,
    },
    {
      name: "Save Status",
      selector: (row) => row.save_status,
      sortable: true,
    },
    {
      name: "Save Color",
      selector: (row) => row.save_color,
    },
    {
      name: "Door Status",
      selector: (row) => row.door_status,
      sortable: true,
    },
    {
      name: "Intercome Status",
      selector: (row) => (
       row.intercom_status
      ),
    },
    {
      name: "Inetercom Number",
      selector: (row) => row.intercom_number,
    },
    {
      name: "Access Point",
      selector: (row) => row.access_point,
    },
    {
      name: "Wifi Status",
      selector: (row) => (

        row.wifi_status
       
      ),
    },
    {
      name: "Wifi Type",
      selector: (row) => (

        row.wifi_type
       
      ),
    },
    {
      name: " TV Status",
      selector: (row) => (

        row.tv_status
       
      ),
    },

    {
      name: "Action",
      cell: (row) => (
        <Stack direction="row">
          <IconButton
            color="error"
            onClick={() => alertAction(row.id)}
            aria-label="delete"
          >
            <Delete />
          </IconButton>

          <IconButton
            color="primary"
            aria-label="add"
            onClick={() => func(row.id)}
          >
            <Edit />
          </IconButton>
          <IconButton color="primary" aria-label="add">
            <Link to={`${row.id}`}>
              <Visibility />
            </Link>
          </IconButton>
        </Stack>
      )
    },
  ];