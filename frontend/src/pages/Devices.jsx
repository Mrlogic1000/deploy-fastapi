import React, { useState } from "react";
import { getDevice, getDevices, postDevice } from "../utilities/api";
import {
  Link,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Menu,
  Modal,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CustomModal from "../components/CustomModal";
import CustomDialog from "../components/CustomDialog";
import VarticalForm from "../components/VarticalForm";
import EditForm from "../components/Edit";
import MyFormikForm from "../components/MyFormikForm";
import MultiSTepForm from "../components/MultiSTepForm";
import { Directions, Save, SaveAlt, Search, Upload } from "@mui/icons-material";
import { CSVLink } from "react-csv";
import { visuallyHidden } from "@mui/utils";
import { deviceColumn } from "../utilities/tablecolumns";
import PaginationTable from "../components/PaginationTable";

export default function Devices() {
  const loadDevice = useLoaderData();
  console.log(loadDevice);
  const [records, setRecord] = useState(loadDevice);
  const [records2, setRecord2] = useState(loadDevice);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [edit, setEdit] = useState(null);
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    serial_no: "",
    location: "",
    mac: "",
    type: "",
    install: "",
    status: "",
    description: "",
  });
  const navigation = useNavigation();
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleOpen2 = (e) => {
    setOpen2(true);
  };
  const handleClose = (e) => {
    setOpen(false);
    // setInputs(null)
  };
  const handleClose2 = (e) => {
    setOpen2(false);
    // setInputs(null)
  };
  const editDevice = async (params) => {
    const res = await getDevice(params);
    if (res) {
      setInputs((values) => ({ ...res }));
      setOpen2(true);
    }
  };
  function alertAction(id) {
    setDeleteId(id);
    setAlertopen(true);
    console.log(deleteId);
  }
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
  function searchRecord(e) {
    let search = e.target.value;
    const newRecords = loadDevice.filter((data) =>
      data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setRecord(newRecords);
    
  }
  return (
    <Stack sx={{ MaxHeight: "100%" }}>
      <Stack
        // bgcolor='red'
        direction="row"
        justifyContent='space-between'
        spacing={1}
        sx={{ margin: "10px" }}
      >
        {/* <IconButton variant="contained" onClick={()=>handleOpen()}>
                   <Save />
                 </IconButton> */}
        <Box>
        <Link to="/create_device">Add</Link>
        <IconButton component="label" role={undefined} variant="contained">
          <Upload />
          <TextField
            sx={visuallyHidden}
            type="file"
            onChange={handleImport}
            multiple
          />
        </IconButton>

        <CSVLink style={{ textDecoration: "none" }} data={loadDevice}>
          <IconButton>
            <SaveAlt />
          </IconButton>
        </CSVLink>
        </Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            // width: 400,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Menu />
          </IconButton>
          <InputBase
          onChange={searchRecord}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Devices"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <Directions />
          </IconButton> */}
        </Paper>
      </Stack>
      {/* <CustomizedTable rows={loadDevice}/> */}

      <CustomDialog title="New Device" open={open} close={handleClose}>
        <MultiSTepForm />
      </CustomDialog>
      <CustomDialog title="Edit" open={open2} close={handleClose}>
        <EditForm
          inputs={inputs}
          open={handleOpen2}
          close={handleClose2}
          setInputs={setInputs}
        />
      </CustomDialog>

      <PaginationTable
        columns={deviceColumn}
        rows={records}
        func={editDevice}
      />
    </Stack>
  );
}

export function loader() {
  return getDevices();
}

export async function action({ request }) {
  const formData = await request.formData();
  const device = {
    name: formData.get("name"),
    ip: formData.get("ip"),
    mac: formData.get("mac"),
    type: formData.get("type"),
    install: formData.get("install"),
    serial_no: formData.get("serial_no"),
    model: formData.get("model"),
    status: formData.get("status"),
  };
  // console.log(device)

  postDevice(device);

  return redirect("/");
}
