import {
  Add,
  BrowserUpdated,
  CloudUpload,
  Delete,
  Details,
  Edit,
  Mail,
  NewReleases,
  Phonelink,
  PhonelinkOff,
  Save,
  SaveAlt,
  Search,
  Send,
  Upload,
  Visibility,
} from "@mui/icons-material";
import { visuallyHidden } from "@mui/utils";
import {
  Badge,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { deleteDevice, postDevice } from "../utilities/api";
import { color } from "@mui/system";
import { CSVLink, CSVDownload } from "react-csv";
import * as XLSX from "xlsx";
import CustomAlert from "./CustomAlert";
import DataTable, { createTheme } from 'react-data-table-component';

export default function Datatable({ datas, open, func,column }) {
  
  const [records, setRecord] = useState(datas);
  const [records2, setRecord2] = useState(datas);
  const [alertOpen, setAlertopen] = useState(false);
  const [deleteId, setId] = useState(false);

  function alertAction(id) {
    setAlertopen(true);
    setId(id);
  }
  function alertClose(id) {
    setAlertopen(false);
  }

  function searchRecord(e) {
    let search = e.target.value;
    const newRecords = datas.filter((data) =>
      data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setRecord(newRecords);
    console.log(records);
  }

  function deleteAction(id) {
    deleteDevice(id);
    window.location.reload();
  }
  const customStyles = {
    headCells: {
      styles: {
        backgroundColor: "black",
        color: "white",
      },
    },
  };
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
    <Stack justifyContent="space-between" sx={{ width: "100%", height:'100%'}}>
      <Stack>
        <DataTable
        customStyles={customStyles}
        title={<Typography variant="h6">Device</Typography>}
        columns={column}
        data={records}
        highlightOnHover
        pagination
        actions={
          <Box
            sx={{ display: { xs: "none", md: "block" } }}
            direction="row"
            spacing={1}
          >
            <IconButton variant="contained" onClick={open}>
              <Save />
            </IconButton>
            <IconButton component="label" role={undefined} variant="contained">
              <Upload />
              <TextField
                sx={visuallyHidden}
                type="file"
                onChange={handleImport}
                multiple
              />
            </IconButton>

            <CSVLink style={{ textDecoration: "none" }} data={datas}>
              <IconButton>
                <SaveAlt />
              </IconButton>
            </CSVLink>
          </Box>
        }
        subHeader
        subHeaderComponent={
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              onChange={searchRecord}
              id="input-with-sx"
              label="Devices"
              variant="standard"
            />
          </Box>
        }
      ></DataTable>
      <CustomAlert open={alertOpen} close={alertClose} data={deleteId} />

      </Stack>
      <Box
        sx={{ display: { xs: "block", md: "none" } }}
        direction="row"
        spacing={1}
      >
        <IconButton variant="contained" onClick={open}>
          <Save />
        </IconButton>
        <IconButton component="label" role={undefined} variant="contained">
          <Upload />
          <TextField
            sx={visuallyHidden}
            type="file"
            onChange={handleImport}
            multiple
          />
        </IconButton>

        <CSVLink style={{ textDecoration: "none" }} data={datas}>
          <IconButton>
            <SaveAlt />
          </IconButton>
        </CSVLink>
      </Box>
    </Stack>
  );
}
