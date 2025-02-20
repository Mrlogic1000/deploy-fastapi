import { Form, Formik } from "formik";
import React from "react";
import InputField from "./InputField";
import { name } from "react-date-object/calendars/julian";
import { Button, Stack, TextField } from "@mui/material";
import GroupRadio from "./GroupRadio";
import MyRadioBox from "./MyRadioBox";

export default function MyFormikForm() {
    const options = [
        {name:'name', label:'Name'},
        {name:'model', label:'Model'},
        {name:'ip', label:'IP'},
        {name:'mac', label:'MAC'},
        {name:'serial', label:'Serial'},
        {name:'type', label:'Type'},
    ]
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          model: "",
          description:"",
          ip:'',
          mac:'',
          type:'',
          serial_no:'',
          status:'',
          install:'',
        }}
      >
        {(formik) => (
          <Form>
            
            <Stack direction="row" spacing={4}>
              <Stack spacing={2}>
              {
                options.map((textinput,pos)=>(
                    <InputField key={pos} label={textinput.label} name={textinput.name} />
                ))
              }
              </Stack>

              <Stack spacing={2}>       
               

                <MyRadioBox label='Terms' lengend='Terms of services' name="acceptedTerms"/>
                <InputField
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
                    // disabled={submitting}
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
        )}
      </Formik>
    </div>
  );
}
