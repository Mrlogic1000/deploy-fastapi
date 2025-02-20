import { Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import InputField from "./InputField";
import MyCheckbox from "./MyCheckBox";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function SinglePageForm({validationSchema,initialValues}) {
    
     
  return (
    <Box >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
                console.log(values)
                // window.location.reload()
              }}
      >
        {(formik) => (
          <Form >
           <Grid container alignItems='center' justifyContent='center' spacing={2} sx={{ }} >

           
           <Stack>
            <InputField name="name" label="Name" />
            <InputField name="location" label="Location" />
            <InputField name="mac" label="MAC" />
            <InputField name="model" label="Model" />
            </Stack>
            <Stack>

            <InputField name="type" label="Type" />
            <InputField name="serial_no" label="Serial Nunmber" />
            <InputField name="status" label="Working" />
            <MyCheckbox name="active" lengend="legend" label="Active" />
            </Stack>
            </Grid>
            
           
            <Stack justifyContent='center' direction='row' spacing={3} sx={{marginTop:'10px', marginLeft:'40px'}}>
            <Button type="submit" variant="contained" sx={{marginTop:'10px'}}>Save</Button>
            <Button type="submit" variant="contained" sx={{marginTop:'10px'}}>Cancel</Button>
            </Stack>

            
          </Form>
        )}
      </Formik>
    </Box>
  );
}
