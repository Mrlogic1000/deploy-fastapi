import { CheckBox, DateRange, Label } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  Rating,
  Autocomplete,
  TextField,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";

export default function CustomForm({action, method}) {
  const initialValues = {
    name:'name',
    serial_no:'',
    ip:'',
    mac:'',
    type:'',
    install:'',
    status:'',
    description:''

  }
  const skills = ["React", "PHP", "python"];
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Form method="post" action="/nodes" >
        <Stack spacing={2}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Identity
          </FormLabel>
          <Stack direction='row'>
          <TextField id="name" value={initialValues.name} name="name" placeholder="primary-router" fullWidth variant="outlined" />
          <TextField id="name" name="serial_no" placeholder="SN234Y878" fullWidth variant="outlined" />

          </Stack>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Addresses
          </FormLabel>
          <Stack direction="row" spacing={2}>
            <TextField
              id="ip"
              name="ip"
              fullWidth
              placeholder="192.168.1.255"
              variant="outlined"
            />

            <TextField
              id="mac"
              name="mac"
              fullWidth
              placeholder="1A:4E:F5:8D:ED:C2"
              variant="outlined"
            />
          </Stack>

          {/* ------------------------------------------------------------------------------------------- */}
          <FormLabel id="demo-row-radio-buttons-group-label">Details</FormLabel>

          <Stack direction="row" spacing={2}>
            <TextField
              id="type"
              name="type"
              fullWidth
              label="Type"
              variant="outlined"
            />
            <TextField id="model" name="model" fullWidth label="Model" variant="outlined" />
          </Stack>

          <Stack direction='row' justifyContent='space-around'>
            <Stack>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Installed
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                row
              >
                <FormControlLabel name="install" value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel name="install" value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Stack>
            <Stack>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>

            <RadioGroup
            row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel name="status" value="good" control={<Radio />} label="Good" />
              <FormControlLabel
                value="faulty"
                name="status"
                control={<Radio />}
                label="Faulty"
              />
            </RadioGroup>
            </Stack>
          </Stack>

          <FormLabel id="demo-row-radio-buttons-group-label">
            Description
          </FormLabel>

          <TextField name="description" multiline rows={3} />
        </Stack>
        
            <Button type="submit" fullWidth variant="contained" sx={{marginTop:'10px'}}>Post</Button>
            
          
      </Form>
    </Box>
  );
}
