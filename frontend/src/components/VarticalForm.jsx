import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";
import GroupRadio from "./GroupRadio";

export default function VarticalForm({ close, submitting }) {
  const modelOption = ['Cisco','Mikrotik','TP-Link']
  const inputs = [
    {
      id: "name",
      name: "name",
      placeholder: "{name}-{type}",
    },
    {
      id: "serial_no",
      name: "serial_no",
      placeholder: "SN234Y878",
    },
    {
      id: "ip",
      name: "ip",
      placeholder: "192.168.1.255",
    },
    {
      id: "mac",
      name: "mac",
      placeholder: "1A:4E:F5:8D:ED:C2",
    },
    {
      id: "type",
      name: "type",
      placeholder: "Router",
    },
  ];
  const options1 = [
    {
      name: "install",
      value: "on",
      label: "On",
    },
    {
      name: "install",
      value: "off",
      label: "Off",
    },
  ];
  const options2 = [
    {
      name: "status",
      value: "good",
      label: "Good",
    },
    {
      name: "status",
      value: "faulty",
      label: "Faulty",
    },
  ];

  const textInputs = inputs.map((input, index) => (
    <TextField
      key={index}
      id={input.id}
      name={input.name}
      placeholder={input.placeholder}
    />
  ));

  return (
    <Box padding={2}>
      <Form action="" method="post">
        <Stack direction="row" spacing={4}>
          <Stack spacing={2}>{textInputs}</Stack>

          <Stack spacing={2}>
            <Autocomplete
              disablePortal
              options={modelOption}
              freeSolo
              name="model" 
              id="model"      
              renderInput={(params) => <TextField {...params} label="Model"  />}
            />
            {/* <TextField
              id="model"
              name="model"
              fullWidth
              label="Model"
              variant="outlined"
            /> */}

            <GroupRadio
              options={options1}
              aria="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              direction={true}
              title="Install"
            />
            <GroupRadio
              options={options2}
              aria="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              direction={true}
              title="Status"
            />

            <TextField
              label="Description"
              name="description"
              multiline
              rows={2}
            />

            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "10px" }}
                disabled={submitting}
                onClick={close}
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ marginTop: "10px", backgroundColor: "gray" }}
                onClick={close}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Form>
    </Box>
  );
}
