import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { name } from "react-date-object/calendars/julian";

export default function MyRadioBox({name,label,lengend,...otherProps  }){
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField(name);
    const {setFieldValue} = useFormikContext()

    const handelChange = evt =>{
      const {checked} = evt.target
      setFieldValue(name,checked)      

    }
     
    const configCheckBox = {
      ...field,
      onChange: handelChange
    }
    const ConfigFormControl = {}

    if(meta && meta.error && meta.touched){
      ConfigFormControl.error = true
    }
    return (
     <FormControl {...ConfigFormControl}>
      <FormLabel component='legend'>{lengend}</FormLabel>
      <FormGroup>
        <FormControlLabel label={label} control={<Checkbox {...configCheckBox}/> }/>
      </FormGroup>

     </FormControl>
    )
  }