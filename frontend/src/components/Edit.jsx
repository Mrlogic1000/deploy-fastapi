import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormLabel,
  Hidden,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { updateDevice } from "../utilities/api";

export default function EditForm({ close, submitting, inputs, setInputs }) {
  const modelOption = ["Cisco", "Mikrotik", "TP-Link", "Hikvision", "Alhua"];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;    
    setInputs((values) => ({ ...values, [name]: value }));
  };
  
  async function handleSubmit(event) {
    event.preventDefault();
    const id = inputs.id;
    const device = {
      name: inputs.name,
      type: inputs.type,
      serial_no: inputs.serial_no,
      ip: inputs.ip,
      mac: inputs.mac,
      model: inputs.model,
      status: inputs.status,
      install: inputs.install,
    };
    // console.log(inputs.model);
    const res = await updateDevice(id, device);
    window.location.reload()
  }
  return (
    <Box padding={2}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={4}>
          <Stack spacing={2}>
            <Hidden
              id="id"
              sx={{ display: "hidden" }}
              value={inputs?.id}
              onChange={handleChange}
              name="id"
              placeholder="primary-router"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="name"
              value={inputs?.name}
              onChange={handleChange}
              name="name"
              placeholder="primary-router"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="serial_no"
              value={inputs?.serial_no}
              onChange={handleChange}
              name="serial_no"
              placeholder="SN234Y878"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="ip"
              value={inputs?.ip}
              onChange={handleChange}
              name="ip"
              fullWidth
              placeholder="192.168.1.255"
              variant="outlined"
            />
            <TextField
              id="mac"
              value={inputs?.mac}
              onChange={handleChange}
              name="mac"
              fullWidth
              placeholder="1A:4E:F5:8D:ED:C2"
              variant="outlined"
            />
            <TextField
              id="type"
              value={inputs?.type}
              onChange={handleChange}
              name="type"
              fullWidth
              label="Type"
              variant="outlined"
            />
          </Stack>

          <Stack spacing={2}>
            <Autocomplete
              disablePortal
              options={modelOption}
              freeSolo
              // inputValue={inputs.model}
              
              value={inputs?.model}
              onChange={(e,v)=>setInputs((values) => ({ ...values, ['model']: v }))}
              name="model"
              id="model"
              renderInput={(params) => <TextField {...params} label="Model" />}
            />
            {/* <TextField id="model" value={inputs?.model} onChange={handleChange} name="model" fullWidth label="Model" variant="outlined" /> */}
            <FormLabel id="demo-row-radio-buttons-group-label">
              {" "}
              Installed{" "}
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              row
            >
              <FormControlLabel
                onChange={handleChange}
                name="install"
                value="On"
                control={<Radio />}
                label="On"
              />
              <FormControlLabel
                onChange={handleChange}
                name="install"
                value="off"
                control={<Radio />}
                label="Off"
              />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onChange={handleChange}
                checked={inputs?.status === "good"}
                name="status"
                value="good"
                control={<Radio />}
                label="Good"
              />
              <FormControlLabel
                onChange={handleChange}
                checked={inputs?.status === "faulty"}
                name="status"
                value="faulty"
                control={<Radio />}
                label="Faulty"
              />
            </RadioGroup>

            <TextField
              onChange={handleChange}
              label="Description"
              value={inputs?.description}
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
      </form>
    </Box>
  );
}
