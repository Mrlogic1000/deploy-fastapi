import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { Children } from "react";

export default function MySelect({name, options, ...otherProps }){

    const {setFieldValue} = useFormikContext()
    const [field, meta] = useField(name);

    const handleOnChange = evt=>{
        const {value} = evt.target
        setFieldValue(name, value)
    }

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleOnChange
    }
    if(meta && meta.touched && meta.error){
        configSelect.error = true
        configSelect.helperText = meta.error
    }
    
    return (
      <TextField {...configSelect} >
        {
            options.map((item,pos)=>{
                return (
                    <MenuItem key={pos} value={item.value}>
                        {item.label}
                    
                    </MenuItem>
                )
            })
            
        }

        </TextField>
       
    );
  };